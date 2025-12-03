// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#___path___ InterfaceEthernetSwitchPort#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#___skip___ InterfaceEthernetSwitchPort#___skip___}
  */
  readonly skip?: string;
  /**
  * Adds a VLAN tag with the specified VLAN ID on all untagged ingress traffic on a port, should be used with ```vlan-header``` set to ```always-strip``` on a port to configure the port to be the access port. For hybrid ports ```default-vlan-id``` is used to tag untagged traffic. If two ports have the same ```default-vlan-id```, then VLAN tag is not added since the switch chip assumes that traffic is being forwarded between access ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#default_vlan_id InterfaceEthernetSwitchPort#default_vlan_id}
  */
  readonly defaultVlanId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#id InterfaceEthernetSwitchPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to send egress packet copy to the `mirror-egress-target` port, only available on 88E6393X, 88E6191X and 88E6190 switch chips.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#mirror_egress InterfaceEthernetSwitchPort#mirror_egress}
  */
  readonly mirrorEgress?: boolean | cdktf.IResolvable;
  /**
  * Whether to send ingress packet copy to the `mirror-ingress-target` port, only available on 88E6393X, 88E6191X and 88E6190 switch chips.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#mirror_ingress InterfaceEthernetSwitchPort#mirror_ingress}
  */
  readonly mirrorIngress?: boolean | cdktf.IResolvable;
  /**
  * Selects a single mirroring ingress target port, only available on  88E6393X, 88E6191X and 88E6190 switch chips. Mirrored packets from `mirror-ingress` will be sent to the selected port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#mirror_ingress_target InterfaceEthernetSwitchPort#mirror_ingress_target}
  */
  readonly mirrorIngressTarget?: string;
  /**
  * Port name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#name InterfaceEthernetSwitchPort#name}
  */
  readonly name: string;
  /**
  * Sets action which is performed on the port for egress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#vlan_header InterfaceEthernetSwitchPort#vlan_header}
  */
  readonly vlanHeader?: string;
  /**
  * Changes the VLAN lookup mechanism against the VLAN Table for ingress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#vlan_mode InterfaceEthernetSwitchPort#vlan_mode}
  */
  readonly vlanMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port routeros_interface_ethernet_switch_port}
*/
export class InterfaceEthernetSwitchPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchPort to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_port routeros_interface_ethernet_switch_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchPortConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchPortConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_port',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._defaultVlanId = config.defaultVlanId;
    this._id = config.id;
    this._mirrorEgress = config.mirrorEgress;
    this._mirrorIngress = config.mirrorIngress;
    this._mirrorIngressTarget = config.mirrorIngressTarget;
    this._name = config.name;
    this._vlanHeader = config.vlanHeader;
    this._vlanMode = config.vlanMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // default_vlan_id - computed: false, optional: true, required: false
  private _defaultVlanId?: string; 
  public get defaultVlanId() {
    return this.getStringAttribute('default_vlan_id');
  }
  public set defaultVlanId(value: string) {
    this._defaultVlanId = value;
  }
  public resetDefaultVlanId() {
    this._defaultVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVlanIdInput() {
    return this._defaultVlanId;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // mirror_egress - computed: false, optional: true, required: false
  private _mirrorEgress?: boolean | cdktf.IResolvable; 
  public get mirrorEgress() {
    return this.getBooleanAttribute('mirror_egress');
  }
  public set mirrorEgress(value: boolean | cdktf.IResolvable) {
    this._mirrorEgress = value;
  }
  public resetMirrorEgress() {
    this._mirrorEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorEgressInput() {
    return this._mirrorEgress;
  }

  // mirror_ingress - computed: false, optional: true, required: false
  private _mirrorIngress?: boolean | cdktf.IResolvable; 
  public get mirrorIngress() {
    return this.getBooleanAttribute('mirror_ingress');
  }
  public set mirrorIngress(value: boolean | cdktf.IResolvable) {
    this._mirrorIngress = value;
  }
  public resetMirrorIngress() {
    this._mirrorIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIngressInput() {
    return this._mirrorIngress;
  }

  // mirror_ingress_target - computed: false, optional: true, required: false
  private _mirrorIngressTarget?: string; 
  public get mirrorIngressTarget() {
    return this.getStringAttribute('mirror_ingress_target');
  }
  public set mirrorIngressTarget(value: string) {
    this._mirrorIngressTarget = value;
  }
  public resetMirrorIngressTarget() {
    this._mirrorIngressTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIngressTargetInput() {
    return this._mirrorIngressTarget;
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

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // switch - computed: true, optional: false, required: false
  public get switch() {
    return this.getStringAttribute('switch');
  }

  // vlan_header - computed: false, optional: true, required: false
  private _vlanHeader?: string; 
  public get vlanHeader() {
    return this.getStringAttribute('vlan_header');
  }
  public set vlanHeader(value: string) {
    this._vlanHeader = value;
  }
  public resetVlanHeader() {
    this._vlanHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanHeaderInput() {
    return this._vlanHeader;
  }

  // vlan_mode - computed: false, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      default_vlan_id: cdktf.stringToTerraform(this._defaultVlanId),
      id: cdktf.stringToTerraform(this._id),
      mirror_egress: cdktf.booleanToTerraform(this._mirrorEgress),
      mirror_ingress: cdktf.booleanToTerraform(this._mirrorIngress),
      mirror_ingress_target: cdktf.stringToTerraform(this._mirrorIngressTarget),
      name: cdktf.stringToTerraform(this._name),
      vlan_header: cdktf.stringToTerraform(this._vlanHeader),
      vlan_mode: cdktf.stringToTerraform(this._vlanMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vlan_id: {
        value: cdktf.stringToHclTerraform(this._defaultVlanId),
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
      mirror_egress: {
        value: cdktf.booleanToHclTerraform(this._mirrorEgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_ingress: {
        value: cdktf.booleanToHclTerraform(this._mirrorIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_ingress_target: {
        value: cdktf.stringToHclTerraform(this._mirrorIngressTarget),
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
      vlan_header: {
        value: cdktf.stringToHclTerraform(this._vlanHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_mode: {
        value: cdktf.stringToHclTerraform(this._vlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
