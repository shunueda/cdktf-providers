// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciFabricNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#ad_st DataAciFabricNode#ad_st}
  */
  readonly adSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#address DataAciFabricNode#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#annotation DataAciFabricNode#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#apic_type DataAciFabricNode#apic_type}
  */
  readonly apicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#fabric_node_id DataAciFabricNode#fabric_node_id}
  */
  readonly fabricNodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#fabric_pod_dn DataAciFabricNode#fabric_pod_dn}
  */
  readonly fabricPodDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#fabric_st DataAciFabricNode#fabric_st}
  */
  readonly fabricSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#id DataAciFabricNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#name DataAciFabricNode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#name_alias DataAciFabricNode#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#node_type DataAciFabricNode#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#role DataAciFabricNode#role}
  */
  readonly role?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node aci_fabric_node}
*/
export class DataAciFabricNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_fabric_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciFabricNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciFabricNode to import
  * @param importFromId The id of the existing DataAciFabricNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciFabricNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_fabric_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/fabric_node aci_fabric_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciFabricNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciFabricNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_fabric_node',
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
    this._adSt = config.adSt;
    this._address = config.address;
    this._annotation = config.annotation;
    this._apicType = config.apicType;
    this._fabricNodeId = config.fabricNodeId;
    this._fabricPodDn = config.fabricPodDn;
    this._fabricSt = config.fabricSt;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._nodeType = config.nodeType;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_st - computed: true, optional: true, required: false
  private _adSt?: string; 
  public get adSt() {
    return this.getStringAttribute('ad_st');
  }
  public set adSt(value: string) {
    this._adSt = value;
  }
  public resetAdSt() {
    this._adSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adStInput() {
    return this._adSt;
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

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

  // apic_type - computed: true, optional: true, required: false
  private _apicType?: string; 
  public get apicType() {
    return this.getStringAttribute('apic_type');
  }
  public set apicType(value: string) {
    this._apicType = value;
  }
  public resetApicType() {
    this._apicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apicTypeInput() {
    return this._apicType;
  }

  // fabric_node_id - computed: false, optional: false, required: true
  private _fabricNodeId?: string; 
  public get fabricNodeId() {
    return this.getStringAttribute('fabric_node_id');
  }
  public set fabricNodeId(value: string) {
    this._fabricNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNodeIdInput() {
    return this._fabricNodeId;
  }

  // fabric_pod_dn - computed: false, optional: false, required: true
  private _fabricPodDn?: string; 
  public get fabricPodDn() {
    return this.getStringAttribute('fabric_pod_dn');
  }
  public set fabricPodDn(value: string) {
    this._fabricPodDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricPodDnInput() {
    return this._fabricPodDn;
  }

  // fabric_st - computed: true, optional: true, required: false
  private _fabricSt?: string; 
  public get fabricSt() {
    return this.getStringAttribute('fabric_st');
  }
  public set fabricSt(value: string) {
    this._fabricSt = value;
  }
  public resetFabricSt() {
    this._fabricSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricStInput() {
    return this._fabricSt;
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

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_st: cdktf.stringToTerraform(this._adSt),
      address: cdktf.stringToTerraform(this._address),
      annotation: cdktf.stringToTerraform(this._annotation),
      apic_type: cdktf.stringToTerraform(this._apicType),
      fabric_node_id: cdktf.stringToTerraform(this._fabricNodeId),
      fabric_pod_dn: cdktf.stringToTerraform(this._fabricPodDn),
      fabric_st: cdktf.stringToTerraform(this._fabricSt),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      node_type: cdktf.stringToTerraform(this._nodeType),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_st: {
        value: cdktf.stringToHclTerraform(this._adSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apic_type: {
        value: cdktf.stringToHclTerraform(this._apicType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_node_id: {
        value: cdktf.stringToHclTerraform(this._fabricNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_pod_dn: {
        value: cdktf.stringToHclTerraform(this._fabricPodDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_st: {
        value: cdktf.stringToHclTerraform(this._fabricSt),
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
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
