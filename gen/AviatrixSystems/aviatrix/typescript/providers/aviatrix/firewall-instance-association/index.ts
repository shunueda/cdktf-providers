// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInstanceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Switch to attach/detach firewall instance to/from fireNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#attached FirewallInstanceAssociation#attached}
  */
  readonly attached?: boolean | cdktf.IResolvable;
  /**
  * Egress interface ID, required if it is a firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#egress_interface FirewallInstanceAssociation#egress_interface}
  */
  readonly egressInterface?: string;
  /**
  * Name of the gateway to launch the firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#firenet_gw_name FirewallInstanceAssociation#firenet_gw_name}
  */
  readonly firenetGwName?: string;
  /**
  * Firewall instance name, or FQDN Gateway's gw_name, required if it is a AWS or Azure firewall instance. Not allowed for GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#firewall_name FirewallInstanceAssociation#firewall_name}
  */
  readonly firewallName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#id FirewallInstanceAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of Firewall instance, or FQDN Gateway's gw_name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#instance_id FirewallInstanceAssociation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Lan interface ID, required if it is a firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#lan_interface FirewallInstanceAssociation#lan_interface}
  */
  readonly lanInterface?: string;
  /**
  * Management interface ID, required if it is a firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#management_interface FirewallInstanceAssociation#management_interface}
  */
  readonly managementInterface?: string;
  /**
  * Indication it is a firewall instance or FQDN gateway to be associated to fireNet. Valid values: 'Generic', 'fqdn_gateway'. Value 'fqdn_gateway' is required for FQDN gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#vendor_type FirewallInstanceAssociation#vendor_type}
  */
  readonly vendorType?: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#vpc_id FirewallInstanceAssociation#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association aviatrix_firewall_instance_association}
*/
export class FirewallInstanceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_firewall_instance_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInstanceAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInstanceAssociation to import
  * @param importFromId The id of the existing FirewallInstanceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInstanceAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_firewall_instance_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance_association aviatrix_firewall_instance_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInstanceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallInstanceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_firewall_instance_association',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attached = config.attached;
    this._egressInterface = config.egressInterface;
    this._firenetGwName = config.firenetGwName;
    this._firewallName = config.firewallName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._lanInterface = config.lanInterface;
    this._managementInterface = config.managementInterface;
    this._vendorType = config.vendorType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached - computed: false, optional: true, required: false
  private _attached?: boolean | cdktf.IResolvable; 
  public get attached() {
    return this.getBooleanAttribute('attached');
  }
  public set attached(value: boolean | cdktf.IResolvable) {
    this._attached = value;
  }
  public resetAttached() {
    this._attached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedInput() {
    return this._attached;
  }

  // egress_interface - computed: false, optional: true, required: false
  private _egressInterface?: string; 
  public get egressInterface() {
    return this.getStringAttribute('egress_interface');
  }
  public set egressInterface(value: string) {
    this._egressInterface = value;
  }
  public resetEgressInterface() {
    this._egressInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInterfaceInput() {
    return this._egressInterface;
  }

  // firenet_gw_name - computed: false, optional: true, required: false
  private _firenetGwName?: string; 
  public get firenetGwName() {
    return this.getStringAttribute('firenet_gw_name');
  }
  public set firenetGwName(value: string) {
    this._firenetGwName = value;
  }
  public resetFirenetGwName() {
    this._firenetGwName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firenetGwNameInput() {
    return this._firenetGwName;
  }

  // firewall_name - computed: false, optional: true, required: false
  private _firewallName?: string; 
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  public resetFirewallName() {
    this._firewallName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // lan_interface - computed: false, optional: true, required: false
  private _lanInterface?: string; 
  public get lanInterface() {
    return this.getStringAttribute('lan_interface');
  }
  public set lanInterface(value: string) {
    this._lanInterface = value;
  }
  public resetLanInterface() {
    this._lanInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInterfaceInput() {
    return this._lanInterface;
  }

  // management_interface - computed: false, optional: true, required: false
  private _managementInterface?: string; 
  public get managementInterface() {
    return this.getStringAttribute('management_interface');
  }
  public set managementInterface(value: string) {
    this._managementInterface = value;
  }
  public resetManagementInterface() {
    this._managementInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInterfaceInput() {
    return this._managementInterface;
  }

  // vendor_type - computed: false, optional: true, required: false
  private _vendorType?: string; 
  public get vendorType() {
    return this.getStringAttribute('vendor_type');
  }
  public set vendorType(value: string) {
    this._vendorType = value;
  }
  public resetVendorType() {
    this._vendorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorTypeInput() {
    return this._vendorType;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attached: cdktf.booleanToTerraform(this._attached),
      egress_interface: cdktf.stringToTerraform(this._egressInterface),
      firenet_gw_name: cdktf.stringToTerraform(this._firenetGwName),
      firewall_name: cdktf.stringToTerraform(this._firewallName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      lan_interface: cdktf.stringToTerraform(this._lanInterface),
      management_interface: cdktf.stringToTerraform(this._managementInterface),
      vendor_type: cdktf.stringToTerraform(this._vendorType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attached: {
        value: cdktf.booleanToHclTerraform(this._attached),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      egress_interface: {
        value: cdktf.stringToHclTerraform(this._egressInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firenet_gw_name: {
        value: cdktf.stringToHclTerraform(this._firenetGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_name: {
        value: cdktf.stringToHclTerraform(this._firewallName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_interface: {
        value: cdktf.stringToHclTerraform(this._lanInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_interface: {
        value: cdktf.stringToHclTerraform(this._managementInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_type: {
        value: cdktf.stringToHclTerraform(this._vendorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
