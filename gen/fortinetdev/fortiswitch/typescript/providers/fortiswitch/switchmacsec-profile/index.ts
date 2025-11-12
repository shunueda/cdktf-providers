// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchmacsecProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#cipher_suite SwitchmacsecProfile#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#confident_offset SwitchmacsecProfile#confident_offset}
  */
  readonly confidentOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#dynamic_sort_subtable SwitchmacsecProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#eap_tls_ca_cert SwitchmacsecProfile#eap_tls_ca_cert}
  */
  readonly eapTlsCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#eap_tls_cert SwitchmacsecProfile#eap_tls_cert}
  */
  readonly eapTlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#eap_tls_identity SwitchmacsecProfile#eap_tls_identity}
  */
  readonly eapTlsIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#eap_tls_radius_server SwitchmacsecProfile#eap_tls_radius_server}
  */
  readonly eapTlsRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#encrypt_traffic SwitchmacsecProfile#encrypt_traffic}
  */
  readonly encryptTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#id SwitchmacsecProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#include_macsec_sci SwitchmacsecProfile#include_macsec_sci}
  */
  readonly includeMacsecSci?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#include_mka_icv_ind SwitchmacsecProfile#include_mka_icv_ind}
  */
  readonly includeMkaIcvInd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#macsec_mode SwitchmacsecProfile#macsec_mode}
  */
  readonly macsecMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#macsec_validate SwitchmacsecProfile#macsec_validate}
  */
  readonly macsecValidate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#mka_priority SwitchmacsecProfile#mka_priority}
  */
  readonly mkaPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#mka_sak_rekey_time SwitchmacsecProfile#mka_sak_rekey_time}
  */
  readonly mkaSakRekeyTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#name SwitchmacsecProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#replay_protect SwitchmacsecProfile#replay_protect}
  */
  readonly replayProtect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#replay_window SwitchmacsecProfile#replay_window}
  */
  readonly replayWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#status SwitchmacsecProfile#status}
  */
  readonly status?: string;
  /**
  * mka_psk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#mka_psk SwitchmacsecProfile#mka_psk}
  */
  readonly mkaPsk?: SwitchmacsecProfileMkaPsk[] | cdktf.IResolvable;
  /**
  * traffic_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#traffic_policy SwitchmacsecProfile#traffic_policy}
  */
  readonly trafficPolicy?: SwitchmacsecProfileTrafficPolicy[] | cdktf.IResolvable;
}
export interface SwitchmacsecProfileMkaPsk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#crypto_alg SwitchmacsecProfile#crypto_alg}
  */
  readonly cryptoAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#mka_cak SwitchmacsecProfile#mka_cak}
  */
  readonly mkaCak?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#mka_ckn SwitchmacsecProfile#mka_ckn}
  */
  readonly mkaCkn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#name SwitchmacsecProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#status SwitchmacsecProfile#status}
  */
  readonly status?: string;
}

export function switchmacsecProfileMkaPskToTerraform(struct?: SwitchmacsecProfileMkaPsk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_alg: cdktf.stringToTerraform(struct!.cryptoAlg),
    mka_cak: cdktf.stringToTerraform(struct!.mkaCak),
    mka_ckn: cdktf.stringToTerraform(struct!.mkaCkn),
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function switchmacsecProfileMkaPskToHclTerraform(struct?: SwitchmacsecProfileMkaPsk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_alg: {
      value: cdktf.stringToHclTerraform(struct!.cryptoAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mka_cak: {
      value: cdktf.stringToHclTerraform(struct!.mkaCak),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mka_ckn: {
      value: cdktf.stringToHclTerraform(struct!.mkaCkn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchmacsecProfileMkaPskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchmacsecProfileMkaPsk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoAlg = this._cryptoAlg;
    }
    if (this._mkaCak !== undefined) {
      hasAnyValues = true;
      internalValueResult.mkaCak = this._mkaCak;
    }
    if (this._mkaCkn !== undefined) {
      hasAnyValues = true;
      internalValueResult.mkaCkn = this._mkaCkn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchmacsecProfileMkaPsk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cryptoAlg = undefined;
      this._mkaCak = undefined;
      this._mkaCkn = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cryptoAlg = value.cryptoAlg;
      this._mkaCak = value.mkaCak;
      this._mkaCkn = value.mkaCkn;
      this._name = value.name;
      this._status = value.status;
    }
  }

  // crypto_alg - computed: true, optional: true, required: false
  private _cryptoAlg?: string; 
  public get cryptoAlg() {
    return this.getStringAttribute('crypto_alg');
  }
  public set cryptoAlg(value: string) {
    this._cryptoAlg = value;
  }
  public resetCryptoAlg() {
    this._cryptoAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoAlgInput() {
    return this._cryptoAlg;
  }

  // mka_cak - computed: true, optional: true, required: false
  private _mkaCak?: string; 
  public get mkaCak() {
    return this.getStringAttribute('mka_cak');
  }
  public set mkaCak(value: string) {
    this._mkaCak = value;
  }
  public resetMkaCak() {
    this._mkaCak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkaCakInput() {
    return this._mkaCak;
  }

  // mka_ckn - computed: true, optional: true, required: false
  private _mkaCkn?: string; 
  public get mkaCkn() {
    return this.getStringAttribute('mka_ckn');
  }
  public set mkaCkn(value: string) {
    this._mkaCkn = value;
  }
  public resetMkaCkn() {
    this._mkaCkn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkaCknInput() {
    return this._mkaCkn;
  }

  // name - computed: true, optional: true, required: false
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
}

export class SwitchmacsecProfileMkaPskList extends cdktf.ComplexList {
  public internalValue? : SwitchmacsecProfileMkaPsk[] | cdktf.IResolvable

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
  public get(index: number): SwitchmacsecProfileMkaPskOutputReference {
    return new SwitchmacsecProfileMkaPskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchmacsecProfileTrafficPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#exclude_protocol SwitchmacsecProfile#exclude_protocol}
  */
  readonly excludeProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#name SwitchmacsecProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#security_policy SwitchmacsecProfile#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#status SwitchmacsecProfile#status}
  */
  readonly status?: string;
}

export function switchmacsecProfileTrafficPolicyToTerraform(struct?: SwitchmacsecProfileTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_protocol: cdktf.stringToTerraform(struct!.excludeProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    security_policy: cdktf.stringToTerraform(struct!.securityPolicy),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function switchmacsecProfileTrafficPolicyToHclTerraform(struct?: SwitchmacsecProfileTrafficPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_protocol: {
      value: cdktf.stringToHclTerraform(struct!.excludeProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_policy: {
      value: cdktf.stringToHclTerraform(struct!.securityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchmacsecProfileTrafficPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchmacsecProfileTrafficPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeProtocol = this._excludeProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._securityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityPolicy = this._securityPolicy;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchmacsecProfileTrafficPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeProtocol = undefined;
      this._name = undefined;
      this._securityPolicy = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeProtocol = value.excludeProtocol;
      this._name = value.name;
      this._securityPolicy = value.securityPolicy;
      this._status = value.status;
    }
  }

  // exclude_protocol - computed: true, optional: true, required: false
  private _excludeProtocol?: string; 
  public get excludeProtocol() {
    return this.getStringAttribute('exclude_protocol');
  }
  public set excludeProtocol(value: string) {
    this._excludeProtocol = value;
  }
  public resetExcludeProtocol() {
    this._excludeProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeProtocolInput() {
    return this._excludeProtocol;
  }

  // name - computed: true, optional: true, required: false
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

  // security_policy - computed: true, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
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
}

export class SwitchmacsecProfileTrafficPolicyList extends cdktf.ComplexList {
  public internalValue? : SwitchmacsecProfileTrafficPolicy[] | cdktf.IResolvable

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
  public get(index: number): SwitchmacsecProfileTrafficPolicyOutputReference {
    return new SwitchmacsecProfileTrafficPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile fortiswitch_switchmacsec_profile}
*/
export class SwitchmacsecProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchmacsec_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchmacsecProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchmacsecProfile to import
  * @param importFromId The id of the existing SwitchmacsecProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchmacsecProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchmacsec_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchmacsec_profile fortiswitch_switchmacsec_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchmacsecProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchmacsecProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchmacsec_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipherSuite = config.cipherSuite;
    this._confidentOffset = config.confidentOffset;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eapTlsCaCert = config.eapTlsCaCert;
    this._eapTlsCert = config.eapTlsCert;
    this._eapTlsIdentity = config.eapTlsIdentity;
    this._eapTlsRadiusServer = config.eapTlsRadiusServer;
    this._encryptTraffic = config.encryptTraffic;
    this._id = config.id;
    this._includeMacsecSci = config.includeMacsecSci;
    this._includeMkaIcvInd = config.includeMkaIcvInd;
    this._macsecMode = config.macsecMode;
    this._macsecValidate = config.macsecValidate;
    this._mkaPriority = config.mkaPriority;
    this._mkaSakRekeyTime = config.mkaSakRekeyTime;
    this._name = config.name;
    this._replayProtect = config.replayProtect;
    this._replayWindow = config.replayWindow;
    this._status = config.status;
    this._mkaPsk.internalValue = config.mkaPsk;
    this._trafficPolicy.internalValue = config.trafficPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher_suite - computed: true, optional: true, required: false
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
  }

  // confident_offset - computed: true, optional: true, required: false
  private _confidentOffset?: string; 
  public get confidentOffset() {
    return this.getStringAttribute('confident_offset');
  }
  public set confidentOffset(value: string) {
    this._confidentOffset = value;
  }
  public resetConfidentOffset() {
    this._confidentOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentOffsetInput() {
    return this._confidentOffset;
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

  // eap_tls_ca_cert - computed: true, optional: true, required: false
  private _eapTlsCaCert?: string; 
  public get eapTlsCaCert() {
    return this.getStringAttribute('eap_tls_ca_cert');
  }
  public set eapTlsCaCert(value: string) {
    this._eapTlsCaCert = value;
  }
  public resetEapTlsCaCert() {
    this._eapTlsCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsCaCertInput() {
    return this._eapTlsCaCert;
  }

  // eap_tls_cert - computed: true, optional: true, required: false
  private _eapTlsCert?: string; 
  public get eapTlsCert() {
    return this.getStringAttribute('eap_tls_cert');
  }
  public set eapTlsCert(value: string) {
    this._eapTlsCert = value;
  }
  public resetEapTlsCert() {
    this._eapTlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsCertInput() {
    return this._eapTlsCert;
  }

  // eap_tls_identity - computed: true, optional: true, required: false
  private _eapTlsIdentity?: string; 
  public get eapTlsIdentity() {
    return this.getStringAttribute('eap_tls_identity');
  }
  public set eapTlsIdentity(value: string) {
    this._eapTlsIdentity = value;
  }
  public resetEapTlsIdentity() {
    this._eapTlsIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsIdentityInput() {
    return this._eapTlsIdentity;
  }

  // eap_tls_radius_server - computed: true, optional: true, required: false
  private _eapTlsRadiusServer?: string; 
  public get eapTlsRadiusServer() {
    return this.getStringAttribute('eap_tls_radius_server');
  }
  public set eapTlsRadiusServer(value: string) {
    this._eapTlsRadiusServer = value;
  }
  public resetEapTlsRadiusServer() {
    this._eapTlsRadiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapTlsRadiusServerInput() {
    return this._eapTlsRadiusServer;
  }

  // encrypt_traffic - computed: true, optional: true, required: false
  private _encryptTraffic?: string; 
  public get encryptTraffic() {
    return this.getStringAttribute('encrypt_traffic');
  }
  public set encryptTraffic(value: string) {
    this._encryptTraffic = value;
  }
  public resetEncryptTraffic() {
    this._encryptTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptTrafficInput() {
    return this._encryptTraffic;
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

  // include_macsec_sci - computed: true, optional: true, required: false
  private _includeMacsecSci?: string; 
  public get includeMacsecSci() {
    return this.getStringAttribute('include_macsec_sci');
  }
  public set includeMacsecSci(value: string) {
    this._includeMacsecSci = value;
  }
  public resetIncludeMacsecSci() {
    this._includeMacsecSci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMacsecSciInput() {
    return this._includeMacsecSci;
  }

  // include_mka_icv_ind - computed: true, optional: true, required: false
  private _includeMkaIcvInd?: string; 
  public get includeMkaIcvInd() {
    return this.getStringAttribute('include_mka_icv_ind');
  }
  public set includeMkaIcvInd(value: string) {
    this._includeMkaIcvInd = value;
  }
  public resetIncludeMkaIcvInd() {
    this._includeMkaIcvInd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMkaIcvIndInput() {
    return this._includeMkaIcvInd;
  }

  // macsec_mode - computed: true, optional: true, required: false
  private _macsecMode?: string; 
  public get macsecMode() {
    return this.getStringAttribute('macsec_mode');
  }
  public set macsecMode(value: string) {
    this._macsecMode = value;
  }
  public resetMacsecMode() {
    this._macsecMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecModeInput() {
    return this._macsecMode;
  }

  // macsec_validate - computed: true, optional: true, required: false
  private _macsecValidate?: string; 
  public get macsecValidate() {
    return this.getStringAttribute('macsec_validate');
  }
  public set macsecValidate(value: string) {
    this._macsecValidate = value;
  }
  public resetMacsecValidate() {
    this._macsecValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecValidateInput() {
    return this._macsecValidate;
  }

  // mka_priority - computed: true, optional: true, required: false
  private _mkaPriority?: number; 
  public get mkaPriority() {
    return this.getNumberAttribute('mka_priority');
  }
  public set mkaPriority(value: number) {
    this._mkaPriority = value;
  }
  public resetMkaPriority() {
    this._mkaPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkaPriorityInput() {
    return this._mkaPriority;
  }

  // mka_sak_rekey_time - computed: true, optional: true, required: false
  private _mkaSakRekeyTime?: number; 
  public get mkaSakRekeyTime() {
    return this.getNumberAttribute('mka_sak_rekey_time');
  }
  public set mkaSakRekeyTime(value: number) {
    this._mkaSakRekeyTime = value;
  }
  public resetMkaSakRekeyTime() {
    this._mkaSakRekeyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkaSakRekeyTimeInput() {
    return this._mkaSakRekeyTime;
  }

  // name - computed: true, optional: true, required: false
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

  // replay_protect - computed: true, optional: true, required: false
  private _replayProtect?: string; 
  public get replayProtect() {
    return this.getStringAttribute('replay_protect');
  }
  public set replayProtect(value: string) {
    this._replayProtect = value;
  }
  public resetReplayProtect() {
    this._replayProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayProtectInput() {
    return this._replayProtect;
  }

  // replay_window - computed: true, optional: true, required: false
  private _replayWindow?: number; 
  public get replayWindow() {
    return this.getNumberAttribute('replay_window');
  }
  public set replayWindow(value: number) {
    this._replayWindow = value;
  }
  public resetReplayWindow() {
    this._replayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayWindowInput() {
    return this._replayWindow;
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

  // mka_psk - computed: false, optional: true, required: false
  private _mkaPsk = new SwitchmacsecProfileMkaPskList(this, "mka_psk", false);
  public get mkaPsk() {
    return this._mkaPsk;
  }
  public putMkaPsk(value: SwitchmacsecProfileMkaPsk[] | cdktf.IResolvable) {
    this._mkaPsk.internalValue = value;
  }
  public resetMkaPsk() {
    this._mkaPsk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mkaPskInput() {
    return this._mkaPsk.internalValue;
  }

  // traffic_policy - computed: false, optional: true, required: false
  private _trafficPolicy = new SwitchmacsecProfileTrafficPolicyList(this, "traffic_policy", false);
  public get trafficPolicy() {
    return this._trafficPolicy;
  }
  public putTrafficPolicy(value: SwitchmacsecProfileTrafficPolicy[] | cdktf.IResolvable) {
    this._trafficPolicy.internalValue = value;
  }
  public resetTrafficPolicy() {
    this._trafficPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInput() {
    return this._trafficPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipher_suite: cdktf.stringToTerraform(this._cipherSuite),
      confident_offset: cdktf.stringToTerraform(this._confidentOffset),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eap_tls_ca_cert: cdktf.stringToTerraform(this._eapTlsCaCert),
      eap_tls_cert: cdktf.stringToTerraform(this._eapTlsCert),
      eap_tls_identity: cdktf.stringToTerraform(this._eapTlsIdentity),
      eap_tls_radius_server: cdktf.stringToTerraform(this._eapTlsRadiusServer),
      encrypt_traffic: cdktf.stringToTerraform(this._encryptTraffic),
      id: cdktf.stringToTerraform(this._id),
      include_macsec_sci: cdktf.stringToTerraform(this._includeMacsecSci),
      include_mka_icv_ind: cdktf.stringToTerraform(this._includeMkaIcvInd),
      macsec_mode: cdktf.stringToTerraform(this._macsecMode),
      macsec_validate: cdktf.stringToTerraform(this._macsecValidate),
      mka_priority: cdktf.numberToTerraform(this._mkaPriority),
      mka_sak_rekey_time: cdktf.numberToTerraform(this._mkaSakRekeyTime),
      name: cdktf.stringToTerraform(this._name),
      replay_protect: cdktf.stringToTerraform(this._replayProtect),
      replay_window: cdktf.numberToTerraform(this._replayWindow),
      status: cdktf.stringToTerraform(this._status),
      mka_psk: cdktf.listMapper(switchmacsecProfileMkaPskToTerraform, true)(this._mkaPsk.internalValue),
      traffic_policy: cdktf.listMapper(switchmacsecProfileTrafficPolicyToTerraform, true)(this._trafficPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher_suite: {
        value: cdktf.stringToHclTerraform(this._cipherSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confident_offset: {
        value: cdktf.stringToHclTerraform(this._confidentOffset),
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
      eap_tls_ca_cert: {
        value: cdktf.stringToHclTerraform(this._eapTlsCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_tls_cert: {
        value: cdktf.stringToHclTerraform(this._eapTlsCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_tls_identity: {
        value: cdktf.stringToHclTerraform(this._eapTlsIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eap_tls_radius_server: {
        value: cdktf.stringToHclTerraform(this._eapTlsRadiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypt_traffic: {
        value: cdktf.stringToHclTerraform(this._encryptTraffic),
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
      include_macsec_sci: {
        value: cdktf.stringToHclTerraform(this._includeMacsecSci),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_mka_icv_ind: {
        value: cdktf.stringToHclTerraform(this._includeMkaIcvInd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_mode: {
        value: cdktf.stringToHclTerraform(this._macsecMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macsec_validate: {
        value: cdktf.stringToHclTerraform(this._macsecValidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mka_priority: {
        value: cdktf.numberToHclTerraform(this._mkaPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mka_sak_rekey_time: {
        value: cdktf.numberToHclTerraform(this._mkaSakRekeyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_protect: {
        value: cdktf.stringToHclTerraform(this._replayProtect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_window: {
        value: cdktf.numberToHclTerraform(this._replayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mka_psk: {
        value: cdktf.listMapperHcl(switchmacsecProfileMkaPskToHclTerraform, true)(this._mkaPsk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchmacsecProfileMkaPskList",
      },
      traffic_policy: {
        value: cdktf.listMapperHcl(switchmacsecProfileTrafficPolicyToHclTerraform, true)(this._trafficPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchmacsecProfileTrafficPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
