// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BfdMultihopInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#admin_state BfdMultihopInterfacePolicy#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#annotation BfdMultihopInterfacePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#description BfdMultihopInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#detection_multiplier BfdMultihopInterfacePolicy#detection_multiplier}
  */
  readonly detectionMultiplier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#id BfdMultihopInterfacePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#min_receive_interval BfdMultihopInterfacePolicy#min_receive_interval}
  */
  readonly minReceiveInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#min_transmit_interval BfdMultihopInterfacePolicy#min_transmit_interval}
  */
  readonly minTransmitInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#name BfdMultihopInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#name_alias BfdMultihopInterfacePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#tenant_dn BfdMultihopInterfacePolicy#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy aci_bfd_multihop_interface_policy}
*/
export class BfdMultihopInterfacePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bfd_multihop_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BfdMultihopInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BfdMultihopInterfacePolicy to import
  * @param importFromId The id of the existing BfdMultihopInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BfdMultihopInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bfd_multihop_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bfd_multihop_interface_policy aci_bfd_multihop_interface_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BfdMultihopInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BfdMultihopInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bfd_multihop_interface_policy',
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
    this._minReceiveInterval = config.minReceiveInterval;
    this._minTransmitInterval = config.minTransmitInterval;
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

  // min_receive_interval - computed: true, optional: true, required: false
  private _minReceiveInterval?: string; 
  public get minReceiveInterval() {
    return this.getStringAttribute('min_receive_interval');
  }
  public set minReceiveInterval(value: string) {
    this._minReceiveInterval = value;
  }
  public resetMinReceiveInterval() {
    this._minReceiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReceiveIntervalInput() {
    return this._minReceiveInterval;
  }

  // min_transmit_interval - computed: true, optional: true, required: false
  private _minTransmitInterval?: string; 
  public get minTransmitInterval() {
    return this.getStringAttribute('min_transmit_interval');
  }
  public set minTransmitInterval(value: string) {
    this._minTransmitInterval = value;
  }
  public resetMinTransmitInterval() {
    this._minTransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTransmitIntervalInput() {
    return this._minTransmitInterval;
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
      min_receive_interval: cdktf.stringToTerraform(this._minReceiveInterval),
      min_transmit_interval: cdktf.stringToTerraform(this._minTransmitInterval),
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
      min_receive_interval: {
        value: cdktf.stringToHclTerraform(this._minReceiveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_transmit_interval: {
        value: cdktf.stringToHclTerraform(this._minTransmitInterval),
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
