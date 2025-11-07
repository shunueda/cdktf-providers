// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyChildRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#action FirewallPolicyChildRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#deny_log FirewallPolicyChildRule#deny_log}
  */
  readonly denyLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#destination_address FirewallPolicyChildRule#destination_address}
  */
  readonly destinationAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#destination_address_group FirewallPolicyChildRule#destination_address_group}
  */
  readonly destinationAddressGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#destination_external_resource_address FirewallPolicyChildRule#destination_external_resource_address}
  */
  readonly destinationExternalResourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#destination_type FirewallPolicyChildRule#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#id FirewallPolicyChildRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#in_interface FirewallPolicyChildRule#in_interface}
  */
  readonly inInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#mkey FirewallPolicyChildRule#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#out_interface FirewallPolicyChildRule#out_interface}
  */
  readonly outInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#service FirewallPolicyChildRule#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#source_address FirewallPolicyChildRule#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#source_address_group FirewallPolicyChildRule#source_address_group}
  */
  readonly sourceAddressGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#source_external_resource_address FirewallPolicyChildRule#source_external_resource_address}
  */
  readonly sourceExternalResourceAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#source_type FirewallPolicyChildRule#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#status FirewallPolicyChildRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#vdom FirewallPolicyChildRule#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule fortiadc_firewall_policy_child_rule}
*/
export class FirewallPolicyChildRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_firewall_policy_child_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallPolicyChildRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallPolicyChildRule to import
  * @param importFromId The id of the existing FirewallPolicyChildRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallPolicyChildRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_firewall_policy_child_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_policy_child_rule fortiadc_firewall_policy_child_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyChildRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyChildRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_firewall_policy_child_rule',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._denyLog = config.denyLog;
    this._destinationAddress = config.destinationAddress;
    this._destinationAddressGroup = config.destinationAddressGroup;
    this._destinationExternalResourceAddress = config.destinationExternalResourceAddress;
    this._destinationType = config.destinationType;
    this._id = config.id;
    this._inInterface = config.inInterface;
    this._mkey = config.mkey;
    this._outInterface = config.outInterface;
    this._service = config.service;
    this._sourceAddress = config.sourceAddress;
    this._sourceAddressGroup = config.sourceAddressGroup;
    this._sourceExternalResourceAddress = config.sourceExternalResourceAddress;
    this._sourceType = config.sourceType;
    this._status = config.status;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // deny_log - computed: true, optional: true, required: false
  private _denyLog?: string; 
  public get denyLog() {
    return this.getStringAttribute('deny_log');
  }
  public set denyLog(value: string) {
    this._denyLog = value;
  }
  public resetDenyLog() {
    this._denyLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyLogInput() {
    return this._denyLog;
  }

  // destination_address - computed: true, optional: true, required: false
  private _destinationAddress?: string; 
  public get destinationAddress() {
    return this.getStringAttribute('destination_address');
  }
  public set destinationAddress(value: string) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
  }

  // destination_address_group - computed: true, optional: true, required: false
  private _destinationAddressGroup?: string; 
  public get destinationAddressGroup() {
    return this.getStringAttribute('destination_address_group');
  }
  public set destinationAddressGroup(value: string) {
    this._destinationAddressGroup = value;
  }
  public resetDestinationAddressGroup() {
    this._destinationAddressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressGroupInput() {
    return this._destinationAddressGroup;
  }

  // destination_external_resource_address - computed: true, optional: true, required: false
  private _destinationExternalResourceAddress?: string; 
  public get destinationExternalResourceAddress() {
    return this.getStringAttribute('destination_external_resource_address');
  }
  public set destinationExternalResourceAddress(value: string) {
    this._destinationExternalResourceAddress = value;
  }
  public resetDestinationExternalResourceAddress() {
    this._destinationExternalResourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationExternalResourceAddressInput() {
    return this._destinationExternalResourceAddress;
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
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

  // in_interface - computed: true, optional: true, required: false
  private _inInterface?: string; 
  public get inInterface() {
    return this.getStringAttribute('in_interface');
  }
  public set inInterface(value: string) {
    this._inInterface = value;
  }
  public resetInInterface() {
    this._inInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInterfaceInput() {
    return this._inInterface;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // out_interface - computed: true, optional: true, required: false
  private _outInterface?: string; 
  public get outInterface() {
    return this.getStringAttribute('out_interface');
  }
  public set outInterface(value: string) {
    this._outInterface = value;
  }
  public resetOutInterface() {
    this._outInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInterfaceInput() {
    return this._outInterface;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // source_address - computed: true, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_group - computed: true, optional: true, required: false
  private _sourceAddressGroup?: string; 
  public get sourceAddressGroup() {
    return this.getStringAttribute('source_address_group');
  }
  public set sourceAddressGroup(value: string) {
    this._sourceAddressGroup = value;
  }
  public resetSourceAddressGroup() {
    this._sourceAddressGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressGroupInput() {
    return this._sourceAddressGroup;
  }

  // source_external_resource_address - computed: true, optional: true, required: false
  private _sourceExternalResourceAddress?: string; 
  public get sourceExternalResourceAddress() {
    return this.getStringAttribute('source_external_resource_address');
  }
  public set sourceExternalResourceAddress(value: string) {
    this._sourceExternalResourceAddress = value;
  }
  public resetSourceExternalResourceAddress() {
    this._sourceExternalResourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceExternalResourceAddressInput() {
    return this._sourceExternalResourceAddress;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      deny_log: cdktf.stringToTerraform(this._denyLog),
      destination_address: cdktf.stringToTerraform(this._destinationAddress),
      destination_address_group: cdktf.stringToTerraform(this._destinationAddressGroup),
      destination_external_resource_address: cdktf.stringToTerraform(this._destinationExternalResourceAddress),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      id: cdktf.stringToTerraform(this._id),
      in_interface: cdktf.stringToTerraform(this._inInterface),
      mkey: cdktf.stringToTerraform(this._mkey),
      out_interface: cdktf.stringToTerraform(this._outInterface),
      service: cdktf.stringToTerraform(this._service),
      source_address: cdktf.stringToTerraform(this._sourceAddress),
      source_address_group: cdktf.stringToTerraform(this._sourceAddressGroup),
      source_external_resource_address: cdktf.stringToTerraform(this._sourceExternalResourceAddress),
      source_type: cdktf.stringToTerraform(this._sourceType),
      status: cdktf.stringToTerraform(this._status),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_log: {
        value: cdktf.stringToHclTerraform(this._denyLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address: {
        value: cdktf.stringToHclTerraform(this._destinationAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_address_group: {
        value: cdktf.stringToHclTerraform(this._destinationAddressGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_external_resource_address: {
        value: cdktf.stringToHclTerraform(this._destinationExternalResourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
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
      in_interface: {
        value: cdktf.stringToHclTerraform(this._inInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_interface: {
        value: cdktf.stringToHclTerraform(this._outInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address: {
        value: cdktf.stringToHclTerraform(this._sourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address_group: {
        value: cdktf.stringToHclTerraform(this._sourceAddressGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_external_resource_address: {
        value: cdktf.stringToHclTerraform(this._sourceExternalResourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
