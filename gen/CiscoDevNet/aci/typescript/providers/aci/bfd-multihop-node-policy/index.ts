// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BfdMultihopNodePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#admin_state BfdMultihopNodePolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#annotation BfdMultihopNodePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#description BfdMultihopNodePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#detection_multiplier BfdMultihopNodePolicy#detection_multiplier}
  */
  readonly detectionMultiplier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#id BfdMultihopNodePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#min_rx_interval BfdMultihopNodePolicy#min_rx_interval}
  */
  readonly minRxInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#min_tx_interval BfdMultihopNodePolicy#min_tx_interval}
  */
  readonly minTxInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#name BfdMultihopNodePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#name_alias BfdMultihopNodePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#tenant_dn BfdMultihopNodePolicy#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy aci_bfd_multihop_node_policy}
*/
export class BfdMultihopNodePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bfd_multihop_node_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BfdMultihopNodePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BfdMultihopNodePolicy to import
  * @param importFromId The id of the existing BfdMultihopNodePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BfdMultihopNodePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bfd_multihop_node_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_node_policy aci_bfd_multihop_node_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BfdMultihopNodePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BfdMultihopNodePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bfd_multihop_node_policy',
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
    this._adminState = config.adminState;
    this._annotation = config.annotation;
    this._description = config.description;
    this._detectionMultiplier = config.detectionMultiplier;
    this._id = config.id;
    this._minRxInterval = config.minRxInterval;
    this._minTxInterval = config.minTxInterval;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
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

  // detection_multiplier - computed: true, optional: true, required: false
  private _detectionMultiplier?: string; 
  public get detectionMultiplier() {
    return this.getStringAttribute('detection_multiplier');
  }
  public set detectionMultiplier(value: string) {
    this._detectionMultiplier = value;
  }
  public resetDetectionMultiplier() {
    this._detectionMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMultiplierInput() {
    return this._detectionMultiplier;
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

  // min_rx_interval - computed: true, optional: true, required: false
  private _minRxInterval?: string; 
  public get minRxInterval() {
    return this.getStringAttribute('min_rx_interval');
  }
  public set minRxInterval(value: string) {
    this._minRxInterval = value;
  }
  public resetMinRxInterval() {
    this._minRxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxIntervalInput() {
    return this._minRxInterval;
  }

  // min_tx_interval - computed: true, optional: true, required: false
  private _minTxInterval?: string; 
  public get minTxInterval() {
    return this.getStringAttribute('min_tx_interval');
  }
  public set minTxInterval(value: string) {
    this._minTxInterval = value;
  }
  public resetMinTxInterval() {
    this._minTxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTxIntervalInput() {
    return this._minTxInterval;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      detection_multiplier: cdktf.stringToTerraform(this._detectionMultiplier),
      id: cdktf.stringToTerraform(this._id),
      min_rx_interval: cdktf.stringToTerraform(this._minRxInterval),
      min_tx_interval: cdktf.stringToTerraform(this._minTxInterval),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detection_multiplier: {
        value: cdktf.stringToHclTerraform(this._detectionMultiplier),
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
      min_rx_interval: {
        value: cdktf.stringToHclTerraform(this._minRxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_tx_interval: {
        value: cdktf.stringToHclTerraform(this._minTxInterval),
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
