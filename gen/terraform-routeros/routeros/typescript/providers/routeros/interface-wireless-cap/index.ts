// https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceWirelessCapConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#___path___ InterfaceWirelessCap#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#___skip___ InterfaceWirelessCap#___skip___}
  */
  readonly skip?: string;
  /**
  * Bridge interface to add the interface as a bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#bridge InterfaceWirelessCap#bridge}
  */
  readonly bridge?: string;
  /**
  * List of Manager IP addresses that CAP will attempt to contact during discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#caps_man_addresses InterfaceWirelessCap#caps_man_addresses}
  */
  readonly capsManAddresses?: string[];
  /**
  * List of manager certificate common names that CAP will connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#caps_man_certificate_common_names InterfaceWirelessCap#caps_man_certificate_common_names}
  */
  readonly capsManCertificateCommonNames?: string[];
  /**
  * An ordered list of CAPs Manager names that the CAP will connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#caps_man_names InterfaceWirelessCap#caps_man_names}
  */
  readonly capsManNames?: string[];
  /**
  * Certificate to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#certificate InterfaceWirelessCap#certificate}
  */
  readonly certificate?: string;
  /**
  * List of interfaces over which CAP should attempt to discover CAPs Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#discovery_interfaces InterfaceWirelessCap#discovery_interfaces}
  */
  readonly discoveryInterfaces?: string[];
  /**
  * Disable or enable the CAP functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#enabled InterfaceWirelessCap#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#id InterfaceWirelessCap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of interfaces managed by CAPs Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#interfaces InterfaceWirelessCap#interfaces}
  */
  readonly interfaces?: string[];
  /**
  * Lock CAP to the first CAPsMAN it connects to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#lock_to_caps_man InterfaceWirelessCap#lock_to_caps_man}
  */
  readonly lockToCapsMan?: boolean | cdktf.IResolvable;
  /**
  * An option that creates static virtual interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#static_virtual InterfaceWirelessCap#static_virtual}
  */
  readonly staticVirtual?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap routeros_interface_wireless_cap}
*/
export class InterfaceWirelessCap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_wireless_cap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceWirelessCap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceWirelessCap to import
  * @param importFromId The id of the existing InterfaceWirelessCap that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceWirelessCap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_wireless_cap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.90.0/docs/resources/interface_wireless_cap routeros_interface_wireless_cap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceWirelessCapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceWirelessCapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_wireless_cap',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.90.0'
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
    this._bridge = config.bridge;
    this._capsManAddresses = config.capsManAddresses;
    this._capsManCertificateCommonNames = config.capsManCertificateCommonNames;
    this._capsManNames = config.capsManNames;
    this._certificate = config.certificate;
    this._discoveryInterfaces = config.discoveryInterfaces;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interfaces = config.interfaces;
    this._lockToCapsMan = config.lockToCapsMan;
    this._staticVirtual = config.staticVirtual;
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

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // caps_man_addresses - computed: false, optional: true, required: false
  private _capsManAddresses?: string[]; 
  public get capsManAddresses() {
    return this.getListAttribute('caps_man_addresses');
  }
  public set capsManAddresses(value: string[]) {
    this._capsManAddresses = value;
  }
  public resetCapsManAddresses() {
    this._capsManAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsManAddressesInput() {
    return this._capsManAddresses;
  }

  // caps_man_certificate_common_names - computed: false, optional: true, required: false
  private _capsManCertificateCommonNames?: string[]; 
  public get capsManCertificateCommonNames() {
    return this.getListAttribute('caps_man_certificate_common_names');
  }
  public set capsManCertificateCommonNames(value: string[]) {
    this._capsManCertificateCommonNames = value;
  }
  public resetCapsManCertificateCommonNames() {
    this._capsManCertificateCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsManCertificateCommonNamesInput() {
    return this._capsManCertificateCommonNames;
  }

  // caps_man_names - computed: false, optional: true, required: false
  private _capsManNames?: string[]; 
  public get capsManNames() {
    return this.getListAttribute('caps_man_names');
  }
  public set capsManNames(value: string[]) {
    this._capsManNames = value;
  }
  public resetCapsManNames() {
    this._capsManNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsManNamesInput() {
    return this._capsManNames;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // discovery_interfaces - computed: false, optional: true, required: false
  private _discoveryInterfaces?: string[]; 
  public get discoveryInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('discovery_interfaces'));
  }
  public set discoveryInterfaces(value: string[]) {
    this._discoveryInterfaces = value;
  }
  public resetDiscoveryInterfaces() {
    this._discoveryInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInterfacesInput() {
    return this._discoveryInterfaces;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string[]; 
  public get interfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('interfaces'));
  }
  public set interfaces(value: string[]) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // lock_to_caps_man - computed: false, optional: true, required: false
  private _lockToCapsMan?: boolean | cdktf.IResolvable; 
  public get lockToCapsMan() {
    return this.getBooleanAttribute('lock_to_caps_man');
  }
  public set lockToCapsMan(value: boolean | cdktf.IResolvable) {
    this._lockToCapsMan = value;
  }
  public resetLockToCapsMan() {
    this._lockToCapsMan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockToCapsManInput() {
    return this._lockToCapsMan;
  }

  // locked_caps_man_common_name - computed: true, optional: false, required: false
  public get lockedCapsManCommonName() {
    return this.getStringAttribute('locked_caps_man_common_name');
  }

  // requested_certificate - computed: true, optional: false, required: false
  public get requestedCertificate() {
    return this.getStringAttribute('requested_certificate');
  }

  // static_virtual - computed: false, optional: true, required: false
  private _staticVirtual?: boolean | cdktf.IResolvable; 
  public get staticVirtual() {
    return this.getBooleanAttribute('static_virtual');
  }
  public set staticVirtual(value: boolean | cdktf.IResolvable) {
    this._staticVirtual = value;
  }
  public resetStaticVirtual() {
    this._staticVirtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticVirtualInput() {
    return this._staticVirtual;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      bridge: cdktf.stringToTerraform(this._bridge),
      caps_man_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capsManAddresses),
      caps_man_certificate_common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capsManCertificateCommonNames),
      caps_man_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._capsManNames),
      certificate: cdktf.stringToTerraform(this._certificate),
      discovery_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._discoveryInterfaces),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interfaces),
      lock_to_caps_man: cdktf.booleanToTerraform(this._lockToCapsMan),
      static_virtual: cdktf.booleanToTerraform(this._staticVirtual),
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
      bridge: {
        value: cdktf.stringToHclTerraform(this._bridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caps_man_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capsManAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      caps_man_certificate_common_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capsManCertificateCommonNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      caps_man_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._capsManNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._discoveryInterfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lock_to_caps_man: {
        value: cdktf.booleanToHclTerraform(this._lockToCapsMan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      static_virtual: {
        value: cdktf.booleanToHclTerraform(this._staticVirtual),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
