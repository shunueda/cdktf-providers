// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesPkgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#adom PackagesPkg#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#dynamic_sort_subtable PackagesPkg#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#id PackagesPkg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#name PackagesPkg#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#objver PackagesPkg#objver}
  */
  readonly objver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#oid PackagesPkg#oid}
  */
  readonly oid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#pkg_folder_path PackagesPkg#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#scopetype PackagesPkg#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#type PackagesPkg#type}
  */
  readonly type?: string;
  /**
  * packagesetting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#packagesetting PackagesPkg#packagesetting}
  */
  readonly packagesetting?: PackagesPkgPackagesetting;
  /**
  * packagesettings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#packagesettings PackagesPkg#packagesettings}
  */
  readonly packagesettings?: PackagesPkgPackagesettings;
  /**
  * scopemember block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#scopemember PackagesPkg#scopemember}
  */
  readonly scopemember?: PackagesPkgScopemember[] | cdktf.IResolvable;
}
export interface PackagesPkgPackagesetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#central_nat PackagesPkg#central_nat}
  */
  readonly centralNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#consolidated_firewall_mode PackagesPkg#consolidated_firewall_mode}
  */
  readonly consolidatedFirewallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#fwpolicy6_implicit_log PackagesPkg#fwpolicy6_implicit_log}
  */
  readonly fwpolicy6ImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#fwpolicy_implicit_log PackagesPkg#fwpolicy_implicit_log}
  */
  readonly fwpolicyImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#inspection_mode PackagesPkg#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#ngfw_mode PackagesPkg#ngfw_mode}
  */
  readonly ngfwMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#ssl_ssh_profile PackagesPkg#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
}

export function packagesPkgPackagesettingToTerraform(struct?: PackagesPkgPackagesettingOutputReference | PackagesPkgPackagesetting): any {
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
    ssl_ssh_profile: cdktf.stringToTerraform(struct!.sslSshProfile),
  }
}


export function packagesPkgPackagesettingToHclTerraform(struct?: PackagesPkgPackagesettingOutputReference | PackagesPkgPackagesetting): any {
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

export class PackagesPkgPackagesettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackagesPkgPackagesetting | undefined {
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
    if (this._sslSshProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSshProfile = this._sslSshProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackagesPkgPackagesetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._centralNat = undefined;
      this._consolidatedFirewallMode = undefined;
      this._fwpolicy6ImplicitLog = undefined;
      this._fwpolicyImplicitLog = undefined;
      this._inspectionMode = undefined;
      this._ngfwMode = undefined;
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
      this._sslSshProfile = value.sslSshProfile;
    }
  }

  // central_nat - computed: true, optional: true, required: false
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

  // consolidated_firewall_mode - computed: true, optional: true, required: false
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

  // fwpolicy6_implicit_log - computed: true, optional: true, required: false
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

  // fwpolicy_implicit_log - computed: true, optional: true, required: false
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

  // ngfw_mode - computed: true, optional: true, required: false
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
export interface PackagesPkgPackagesettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#central_nat PackagesPkg#central_nat}
  */
  readonly centralNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#consolidated_firewall_mode PackagesPkg#consolidated_firewall_mode}
  */
  readonly consolidatedFirewallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#fwpolicy6_implicit_log PackagesPkg#fwpolicy6_implicit_log}
  */
  readonly fwpolicy6ImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#fwpolicy_implicit_log PackagesPkg#fwpolicy_implicit_log}
  */
  readonly fwpolicyImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#inspection_mode PackagesPkg#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#ngfw_mode PackagesPkg#ngfw_mode}
  */
  readonly ngfwMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#policy_offload_level PackagesPkg#policy_offload_level}
  */
  readonly policyOffloadLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#ssl_ssh_profile PackagesPkg#ssl_ssh_profile}
  */
  readonly sslSshProfile?: string;
}

export function packagesPkgPackagesettingsToTerraform(struct?: PackagesPkgPackagesettingsOutputReference | PackagesPkgPackagesettings): any {
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


export function packagesPkgPackagesettingsToHclTerraform(struct?: PackagesPkgPackagesettingsOutputReference | PackagesPkgPackagesettings): any {
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

export class PackagesPkgPackagesettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackagesPkgPackagesettings | undefined {
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

  public set internalValue(value: PackagesPkgPackagesettings | undefined) {
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

  // central_nat - computed: true, optional: true, required: false
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

  // consolidated_firewall_mode - computed: true, optional: true, required: false
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

  // fwpolicy6_implicit_log - computed: true, optional: true, required: false
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

  // fwpolicy_implicit_log - computed: true, optional: true, required: false
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

  // inspection_mode - computed: true, optional: true, required: false
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

  // ngfw_mode - computed: true, optional: true, required: false
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

  // policy_offload_level - computed: true, optional: true, required: false
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
export interface PackagesPkgScopemember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#name PackagesPkg#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#vdom PackagesPkg#vdom}
  */
  readonly vdom?: string;
}

export function packagesPkgScopememberToTerraform(struct?: PackagesPkgScopemember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function packagesPkgScopememberToHclTerraform(struct?: PackagesPkgScopemember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackagesPkgScopememberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PackagesPkgScopemember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackagesPkgScopemember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
    }
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
}

export class PackagesPkgScopememberList extends cdktf.ComplexList {
  public internalValue? : PackagesPkgScopemember[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PackagesPkgScopememberOutputReference {
    return new PackagesPkgScopememberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg fortimanager_packages_pkg}
*/
export class PackagesPkg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_pkg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesPkg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesPkg to import
  * @param importFromId The id of the existing PackagesPkg that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesPkg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_pkg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_pkg fortimanager_packages_pkg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesPkgConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PackagesPkgConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_pkg',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._objver = config.objver;
    this._oid = config.oid;
    this._pkgFolderPath = config.pkgFolderPath;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._packagesetting.internalValue = config.packagesetting;
    this._packagesettings.internalValue = config.packagesettings;
    this._scopemember.internalValue = config.scopemember;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // objver - computed: true, optional: true, required: false
  private _objver?: number; 
  public get objver() {
    return this.getNumberAttribute('objver');
  }
  public set objver(value: number) {
    this._objver = value;
  }
  public resetObjver() {
    this._objver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objverInput() {
    return this._objver;
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

  // output_folder_path - computed: true, optional: false, required: false
  public get outputFolderPath() {
    return this.getStringAttribute('output_folder_path');
  }

  // output_pkg_name - computed: true, optional: false, required: false
  public get outputPkgName() {
    return this.getStringAttribute('output_pkg_name');
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
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

  // packagesetting - computed: false, optional: true, required: false
  private _packagesetting = new PackagesPkgPackagesettingOutputReference(this, "packagesetting");
  public get packagesetting() {
    return this._packagesetting;
  }
  public putPackagesetting(value: PackagesPkgPackagesetting) {
    this._packagesetting.internalValue = value;
  }
  public resetPackagesetting() {
    this._packagesetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesettingInput() {
    return this._packagesetting.internalValue;
  }

  // packagesettings - computed: false, optional: true, required: false
  private _packagesettings = new PackagesPkgPackagesettingsOutputReference(this, "packagesettings");
  public get packagesettings() {
    return this._packagesettings;
  }
  public putPackagesettings(value: PackagesPkgPackagesettings) {
    this._packagesettings.internalValue = value;
  }
  public resetPackagesettings() {
    this._packagesettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesettingsInput() {
    return this._packagesettings.internalValue;
  }

  // scopemember - computed: false, optional: true, required: false
  private _scopemember = new PackagesPkgScopememberList(this, "scopemember", false);
  public get scopemember() {
    return this._scopemember;
  }
  public putScopemember(value: PackagesPkgScopemember[] | cdktf.IResolvable) {
    this._scopemember.internalValue = value;
  }
  public resetScopemember() {
    this._scopemember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopememberInput() {
    return this._scopemember.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      objver: cdktf.numberToTerraform(this._objver),
      oid: cdktf.numberToTerraform(this._oid),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      packagesetting: packagesPkgPackagesettingToTerraform(this._packagesetting.internalValue),
      packagesettings: packagesPkgPackagesettingsToTerraform(this._packagesettings.internalValue),
      scopemember: cdktf.listMapper(packagesPkgScopememberToTerraform, true)(this._scopemember.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      objver: {
        value: cdktf.numberToHclTerraform(this._objver),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oid: {
        value: cdktf.numberToHclTerraform(this._oid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      packagesetting: {
        value: packagesPkgPackagesettingToHclTerraform(this._packagesetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackagesPkgPackagesettingList",
      },
      packagesettings: {
        value: packagesPkgPackagesettingsToHclTerraform(this._packagesettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackagesPkgPackagesettingsList",
      },
      scopemember: {
        value: cdktf.listMapperHcl(packagesPkgScopememberToHclTerraform, true)(this._scopemember.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackagesPkgScopememberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
