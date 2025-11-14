// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesPblockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#adom PackagesPblock#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#id PackagesPblock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#name PackagesPblock#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#oid PackagesPblock#oid}
  */
  readonly oid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#scopetype PackagesPblock#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#type PackagesPblock#type}
  */
  readonly type?: string;
  /**
  * packagesettings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#packagesettings PackagesPblock#packagesettings}
  */
  readonly packagesettings?: PackagesPblockPackagesettings;
}
export interface PackagesPblockPackagesettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#central_nat PackagesPblock#central_nat}
  */
  readonly centralNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#consolidated_firewall_mode PackagesPblock#consolidated_firewall_mode}
  */
  readonly consolidatedFirewallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#fwpolicy6_implicit_log PackagesPblock#fwpolicy6_implicit_log}
  */
  readonly fwpolicy6ImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#fwpolicy_implicit_log PackagesPblock#fwpolicy_implicit_log}
  */
  readonly fwpolicyImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#inspection_mode PackagesPblock#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#ngfw_mode PackagesPblock#ngfw_mode}
  */
  readonly ngfwMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#policy_offload_level PackagesPblock#policy_offload_level}
  */
  readonly policyOffloadLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#ssl_ssh_profile PackagesPblock#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
}

export function packagesPblockPackagesettingsToTerraform(struct?: PackagesPblockPackagesettingsOutputReference | PackagesPblockPackagesettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    central_nat: cdktf.stringToTerraform(struct!.centralNat),
    consolidated_firewall_mode: cdktf.stringToTerraform(struct!.consolidatedFirewallMode),
    fwpolicy6_implicit_log: cdktf.stringToTerraform(struct!.fwpolicy6ImplicitLog),
    fwpolicy_implicit_log: cdktf.stringToTerraform(struct!.fwpolicyImplicitLog),
    inspection_mode: cdktf.stringToTerraform(struct!.inspectionMode),
    ngfw_mode: cdktf.stringToTerraform(struct!.ngfwMode),
    policy_offload_level: cdktf.stringToTerraform(struct!.policyOffloadLevel),
    ssl_ssh_profile: cdktf.stringToTerraform(struct!.sslSshProfile),
  }
}


export function packagesPblockPackagesettingsToHclTerraform(struct?: PackagesPblockPackagesettingsOutputReference | PackagesPblockPackagesettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    central_nat: {
      value: cdktf.stringToHclTerraform(struct!.centralNat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consolidated_firewall_mode: {
      value: cdktf.stringToHclTerraform(struct!.consolidatedFirewallMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwpolicy6_implicit_log: {
      value: cdktf.stringToHclTerraform(struct!.fwpolicy6ImplicitLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwpolicy_implicit_log: {
      value: cdktf.stringToHclTerraform(struct!.fwpolicyImplicitLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inspection_mode: {
      value: cdktf.stringToHclTerraform(struct!.inspectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_mode: {
      value: cdktf.stringToHclTerraform(struct!.ngfwMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_offload_level: {
      value: cdktf.stringToHclTerraform(struct!.policyOffloadLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ssh_profile: {
      value: cdktf.stringToHclTerraform(struct!.sslSshProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackagesPblockPackagesettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackagesPblockPackagesettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._centralNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralNat = this._centralNat;
    }
    if (this._consolidatedFirewallMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolidatedFirewallMode = this._consolidatedFirewallMode;
    }
    if (this._fwpolicy6ImplicitLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwpolicy6ImplicitLog = this._fwpolicy6ImplicitLog;
    }
    if (this._fwpolicyImplicitLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwpolicyImplicitLog = this._fwpolicyImplicitLog;
    }
    if (this._inspectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionMode = this._inspectionMode;
    }
    if (this._ngfwMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwMode = this._ngfwMode;
    }
    if (this._policyOffloadLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyOffloadLevel = this._policyOffloadLevel;
    }
    if (this._sslSshProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSshProfile = this._sslSshProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackagesPblockPackagesettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._centralNat = undefined;
      this._consolidatedFirewallMode = undefined;
      this._fwpolicy6ImplicitLog = undefined;
      this._fwpolicyImplicitLog = undefined;
      this._inspectionMode = undefined;
      this._ngfwMode = undefined;
      this._policyOffloadLevel = undefined;
      this._sslSshProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._centralNat = value.centralNat;
      this._consolidatedFirewallMode = value.consolidatedFirewallMode;
      this._fwpolicy6ImplicitLog = value.fwpolicy6ImplicitLog;
      this._fwpolicyImplicitLog = value.fwpolicyImplicitLog;
      this._inspectionMode = value.inspectionMode;
      this._ngfwMode = value.ngfwMode;
      this._policyOffloadLevel = value.policyOffloadLevel;
      this._sslSshProfile = value.sslSshProfile;
    }
  }

  // central_nat - computed: false, optional: true, required: false
  private _centralNat?: string; 
  public get centralNat() {
    return this.getStringAttribute('central_nat');
  }
  public set centralNat(value: string) {
    this._centralNat = value;
  }
  public resetCentralNat() {
    this._centralNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralNatInput() {
    return this._centralNat;
  }

  // consolidated_firewall_mode - computed: false, optional: true, required: false
  private _consolidatedFirewallMode?: string; 
  public get consolidatedFirewallMode() {
    return this.getStringAttribute('consolidated_firewall_mode');
  }
  public set consolidatedFirewallMode(value: string) {
    this._consolidatedFirewallMode = value;
  }
  public resetConsolidatedFirewallMode() {
    this._consolidatedFirewallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolidatedFirewallModeInput() {
    return this._consolidatedFirewallMode;
  }

  // fwpolicy6_implicit_log - computed: false, optional: true, required: false
  private _fwpolicy6ImplicitLog?: string; 
  public get fwpolicy6ImplicitLog() {
    return this.getStringAttribute('fwpolicy6_implicit_log');
  }
  public set fwpolicy6ImplicitLog(value: string) {
    this._fwpolicy6ImplicitLog = value;
  }
  public resetFwpolicy6ImplicitLog() {
    this._fwpolicy6ImplicitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwpolicy6ImplicitLogInput() {
    return this._fwpolicy6ImplicitLog;
  }

  // fwpolicy_implicit_log - computed: false, optional: true, required: false
  private _fwpolicyImplicitLog?: string; 
  public get fwpolicyImplicitLog() {
    return this.getStringAttribute('fwpolicy_implicit_log');
  }
  public set fwpolicyImplicitLog(value: string) {
    this._fwpolicyImplicitLog = value;
  }
  public resetFwpolicyImplicitLog() {
    this._fwpolicyImplicitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwpolicyImplicitLogInput() {
    return this._fwpolicyImplicitLog;
  }

  // inspection_mode - computed: false, optional: true, required: false
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  public resetInspectionMode() {
    this._inspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // ngfw_mode - computed: false, optional: true, required: false
  private _ngfwMode?: string; 
  public get ngfwMode() {
    return this.getStringAttribute('ngfw_mode');
  }
  public set ngfwMode(value: string) {
    this._ngfwMode = value;
  }
  public resetNgfwMode() {
    this._ngfwMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwModeInput() {
    return this._ngfwMode;
  }

  // policy_offload_level - computed: false, optional: true, required: false
  private _policyOffloadLevel?: string; 
  public get policyOffloadLevel() {
    return this.getStringAttribute('policy_offload_level');
  }
  public set policyOffloadLevel(value: string) {
    this._policyOffloadLevel = value;
  }
  public resetPolicyOffloadLevel() {
    this._policyOffloadLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOffloadLevelInput() {
    return this._policyOffloadLevel;
  }

  // ssl_ssh_profile - computed: false, optional: true, required: false
  private _sslSshProfile?: string; 
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }
  public set sslSshProfile(value: string) {
    this._sslSshProfile = value;
  }
  public resetSslSshProfile() {
    this._sslSshProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock fortimanager_packages_pblock}
*/
export class PackagesPblock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_pblock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesPblock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesPblock to import
  * @param importFromId The id of the existing PackagesPblock that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesPblock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_pblock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pblock fortimanager_packages_pblock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesPblockConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PackagesPblockConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_pblock',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._name = config.name;
    this._oid = config.oid;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._packagesettings.internalValue = config.packagesettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // name - computed: false, optional: true, required: false
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

  // oid - computed: true, optional: true, required: false
  private _oid?: number; 
  public get oid() {
    return this.getNumberAttribute('oid');
  }
  public set oid(value: number) {
    this._oid = value;
  }
  public resetOid() {
    this._oid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // packagesettings - computed: false, optional: true, required: false
  private _packagesettings = new PackagesPblockPackagesettingsOutputReference(this, "packagesettings");
  public get packagesettings() {
    return this._packagesettings;
  }
  public putPackagesettings(value: PackagesPblockPackagesettings) {
    this._packagesettings.internalValue = value;
  }
  public resetPackagesettings() {
    this._packagesettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesettingsInput() {
    return this._packagesettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oid: cdktf.numberToTerraform(this._oid),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      packagesettings: packagesPblockPackagesettingsToTerraform(this._packagesettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      oid: {
        value: cdktf.numberToHclTerraform(this._oid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packagesettings: {
        value: packagesPblockPackagesettingsToHclTerraform(this._packagesettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackagesPblockPackagesettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
