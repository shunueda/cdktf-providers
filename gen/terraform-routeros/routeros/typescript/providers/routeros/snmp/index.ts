// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#___path___ Snmp#___path___}
  */
  readonly path?: string;
  /**
  * Contact information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#contact Snmp#contact}
  */
  readonly contact?: string;
  /**
  * Used to disable/enable SNMP service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#enabled Snmp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier for an SNMPv3 engine by configuring the suffix of the engine ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#engine_id_suffix Snmp#engine_id_suffix}
  */
  readonly engineIdSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#id Snmp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#location Snmp#location}
  */
  readonly location?: string;
  /**
  * Force the router to always use the same IP source address for all of the SNMP messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#src_address Snmp#src_address}
  */
  readonly srcAddress?: string;
  /**
  * Which communities configured in community menu to use when sending out the trap. This name must be present in the community list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#trap_community Snmp#trap_community}
  */
  readonly trapCommunity?: string;
  /**
  * What action will generate traps:
  *   * interfaces - interface changes;
  *   * start-trap - snmp server starting on the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#trap_generators Snmp#trap_generators}
  */
  readonly trapGenerators?: string;
  /**
  * List of interfaces that traps are going to be sent out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#trap_interfaces Snmp#trap_interfaces}
  */
  readonly trapInterfaces?: string;
  /**
  * IP (IPv4 or IPv6) addresses of SNMP data collectors that have to receive the trap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#trap_target Snmp#trap_target}
  */
  readonly trapTarget?: string[];
  /**
  * Version of SNMP protocol to use for trap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#trap_version Snmp#trap_version}
  */
  readonly trapVersion?: number;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#vrf Snmp#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp routeros_snmp}
*/
export class Snmp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_snmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmp to import
  * @param importFromId The id of the existing Snmp that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_snmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/snmp routeros_snmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_snmp',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
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
    this._contact = config.contact;
    this._enabled = config.enabled;
    this._engineIdSuffix = config.engineIdSuffix;
    this._id = config.id;
    this._location = config.location;
    this._srcAddress = config.srcAddress;
    this._trapCommunity = config.trapCommunity;
    this._trapGenerators = config.trapGenerators;
    this._trapInterfaces = config.trapInterfaces;
    this._trapTarget = config.trapTarget;
    this._trapVersion = config.trapVersion;
    this._vrf = config.vrf;
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

  // contact - computed: false, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
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

  // engine_id - computed: true, optional: false, required: false
  public get engineId() {
    return this.getStringAttribute('engine_id');
  }

  // engine_id_suffix - computed: false, optional: true, required: false
  private _engineIdSuffix?: string; 
  public get engineIdSuffix() {
    return this.getStringAttribute('engine_id_suffix');
  }
  public set engineIdSuffix(value: string) {
    this._engineIdSuffix = value;
  }
  public resetEngineIdSuffix() {
    this._engineIdSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineIdSuffixInput() {
    return this._engineIdSuffix;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // trap_community - computed: true, optional: true, required: false
  private _trapCommunity?: string; 
  public get trapCommunity() {
    return this.getStringAttribute('trap_community');
  }
  public set trapCommunity(value: string) {
    this._trapCommunity = value;
  }
  public resetTrapCommunity() {
    this._trapCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapCommunityInput() {
    return this._trapCommunity;
  }

  // trap_generators - computed: true, optional: true, required: false
  private _trapGenerators?: string; 
  public get trapGenerators() {
    return this.getStringAttribute('trap_generators');
  }
  public set trapGenerators(value: string) {
    this._trapGenerators = value;
  }
  public resetTrapGenerators() {
    this._trapGenerators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapGeneratorsInput() {
    return this._trapGenerators;
  }

  // trap_interfaces - computed: false, optional: true, required: false
  private _trapInterfaces?: string; 
  public get trapInterfaces() {
    return this.getStringAttribute('trap_interfaces');
  }
  public set trapInterfaces(value: string) {
    this._trapInterfaces = value;
  }
  public resetTrapInterfaces() {
    this._trapInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapInterfacesInput() {
    return this._trapInterfaces;
  }

  // trap_target - computed: false, optional: true, required: false
  private _trapTarget?: string[]; 
  public get trapTarget() {
    return cdktf.Fn.tolist(this.getListAttribute('trap_target'));
  }
  public set trapTarget(value: string[]) {
    this._trapTarget = value;
  }
  public resetTrapTarget() {
    this._trapTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapTargetInput() {
    return this._trapTarget;
  }

  // trap_version - computed: true, optional: true, required: false
  private _trapVersion?: number; 
  public get trapVersion() {
    return this.getNumberAttribute('trap_version');
  }
  public set trapVersion(value: number) {
    this._trapVersion = value;
  }
  public resetTrapVersion() {
    this._trapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapVersionInput() {
    return this._trapVersion;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      contact: cdktf.stringToTerraform(this._contact),
      enabled: cdktf.booleanToTerraform(this._enabled),
      engine_id_suffix: cdktf.stringToTerraform(this._engineIdSuffix),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      trap_community: cdktf.stringToTerraform(this._trapCommunity),
      trap_generators: cdktf.stringToTerraform(this._trapGenerators),
      trap_interfaces: cdktf.stringToTerraform(this._trapInterfaces),
      trap_target: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trapTarget),
      trap_version: cdktf.numberToTerraform(this._trapVersion),
      vrf: cdktf.stringToTerraform(this._vrf),
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
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_id_suffix: {
        value: cdktf.stringToHclTerraform(this._engineIdSuffix),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_community: {
        value: cdktf.stringToHclTerraform(this._trapCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_generators: {
        value: cdktf.stringToHclTerraform(this._trapGenerators),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_interfaces: {
        value: cdktf.stringToHclTerraform(this._trapInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_target: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trapTarget),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trap_version: {
        value: cdktf.numberToHclTerraform(this._trapVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
