// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#device VpnSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#folder VpnSetting#folder}
  */
  readonly folder?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#snippet VpnSetting#snippet}
  */
  readonly snippet?: string;
  /**
  * Vpn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#vpn VpnSetting#vpn}
  */
  readonly vpn?: VpnSettingVpn;
}
export interface VpnSettingVpnIkev2 {
  /**
  * Maximum cached certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#certificate_cache_size VpnSetting#certificate_cache_size}
  */
  readonly certificateCacheSize?: number;
  /**
  * Cookie activation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#cookie_threshold VpnSetting#cookie_threshold}
  */
  readonly cookieThreshold?: number;
  /**
  * Maximum half-opened SA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#max_half_opened_sa VpnSetting#max_half_opened_sa}
  */
  readonly maxHalfOpenedSa?: number;
}

export function vpnSettingVpnIkev2ToTerraform(struct?: VpnSettingVpnIkev2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_cache_size: cdktf.numberToTerraform(struct!.certificateCacheSize),
    cookie_threshold: cdktf.numberToTerraform(struct!.cookieThreshold),
    max_half_opened_sa: cdktf.numberToTerraform(struct!.maxHalfOpenedSa),
  }
}


export function vpnSettingVpnIkev2ToHclTerraform(struct?: VpnSettingVpnIkev2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.certificateCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cookieThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_half_opened_sa: {
      value: cdktf.numberToHclTerraform(struct!.maxHalfOpenedSa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnSettingVpnIkev2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnSettingVpnIkev2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateCacheSize = this._certificateCacheSize;
    }
    if (this._cookieThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieThreshold = this._cookieThreshold;
    }
    if (this._maxHalfOpenedSa !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHalfOpenedSa = this._maxHalfOpenedSa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnSettingVpnIkev2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateCacheSize = undefined;
      this._cookieThreshold = undefined;
      this._maxHalfOpenedSa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateCacheSize = value.certificateCacheSize;
      this._cookieThreshold = value.cookieThreshold;
      this._maxHalfOpenedSa = value.maxHalfOpenedSa;
    }
  }

  // certificate_cache_size - computed: true, optional: true, required: false
  private _certificateCacheSize?: number; 
  public get certificateCacheSize() {
    return this.getNumberAttribute('certificate_cache_size');
  }
  public set certificateCacheSize(value: number) {
    this._certificateCacheSize = value;
  }
  public resetCertificateCacheSize() {
    this._certificateCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCacheSizeInput() {
    return this._certificateCacheSize;
  }

  // cookie_threshold - computed: true, optional: true, required: false
  private _cookieThreshold?: number; 
  public get cookieThreshold() {
    return this.getNumberAttribute('cookie_threshold');
  }
  public set cookieThreshold(value: number) {
    this._cookieThreshold = value;
  }
  public resetCookieThreshold() {
    this._cookieThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieThresholdInput() {
    return this._cookieThreshold;
  }

  // max_half_opened_sa - computed: true, optional: true, required: false
  private _maxHalfOpenedSa?: number; 
  public get maxHalfOpenedSa() {
    return this.getNumberAttribute('max_half_opened_sa');
  }
  public set maxHalfOpenedSa(value: number) {
    this._maxHalfOpenedSa = value;
  }
  public resetMaxHalfOpenedSa() {
    this._maxHalfOpenedSa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHalfOpenedSaInput() {
    return this._maxHalfOpenedSa;
  }
}
export interface VpnSettingVpn {
  /**
  * Ikev2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#ikev2 VpnSetting#ikev2}
  */
  readonly ikev2?: VpnSettingVpnIkev2;
}

export function vpnSettingVpnToTerraform(struct?: VpnSettingVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ikev2: vpnSettingVpnIkev2ToTerraform(struct!.ikev2),
  }
}


export function vpnSettingVpnToHclTerraform(struct?: VpnSettingVpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ikev2: {
      value: vpnSettingVpnIkev2ToHclTerraform(struct!.ikev2),
      isBlock: true,
      type: "struct",
      storageClassType: "VpnSettingVpnIkev2",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnSettingVpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpnSettingVpn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikev2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikev2 = this._ikev2?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnSettingVpn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikev2.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikev2.internalValue = value.ikev2;
    }
  }

  // ikev2 - computed: false, optional: true, required: false
  private _ikev2 = new VpnSettingVpnIkev2OutputReference(this, "ikev2");
  public get ikev2() {
    return this._ikev2;
  }
  public putIkev2(value: VpnSettingVpnIkev2) {
    this._ikev2.internalValue = value;
  }
  public resetIkev2() {
    this._ikev2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikev2Input() {
    return this._ikev2.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting scm_vpn_setting}
*/
export class VpnSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_vpn_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnSetting to import
  * @param importFromId The id of the existing VpnSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_vpn_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/vpn_setting scm_vpn_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_vpn_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._snippet = config.snippet;
    this._vpn.internalValue = config.vpn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn = new VpnSettingVpnOutputReference(this, "vpn");
  public get vpn() {
    return this._vpn;
  }
  public putVpn(value: VpnSettingVpn) {
    this._vpn.internalValue = value;
  }
  public resetVpn() {
    this._vpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      snippet: cdktf.stringToTerraform(this._snippet),
      vpn: vpnSettingVpnToTerraform(this._vpn.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn: {
        value: vpnSettingVpnToHclTerraform(this._vpn.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpnSettingVpn",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
