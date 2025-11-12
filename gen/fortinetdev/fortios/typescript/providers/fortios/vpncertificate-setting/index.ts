// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpncertificateSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#cert_expire_warning VpncertificateSetting#cert_expire_warning}
  */
  readonly certExpireWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_dsa1024 VpncertificateSetting#certname_dsa1024}
  */
  readonly certnameDsa1024: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_dsa2048 VpncertificateSetting#certname_dsa2048}
  */
  readonly certnameDsa2048: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_ecdsa256 VpncertificateSetting#certname_ecdsa256}
  */
  readonly certnameEcdsa256: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_ecdsa384 VpncertificateSetting#certname_ecdsa384}
  */
  readonly certnameEcdsa384: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_ecdsa521 VpncertificateSetting#certname_ecdsa521}
  */
  readonly certnameEcdsa521?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_ed25519 VpncertificateSetting#certname_ed25519}
  */
  readonly certnameEd25519?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_ed448 VpncertificateSetting#certname_ed448}
  */
  readonly certnameEd448?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_rsa1024 VpncertificateSetting#certname_rsa1024}
  */
  readonly certnameRsa1024: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_rsa2048 VpncertificateSetting#certname_rsa2048}
  */
  readonly certnameRsa2048: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#certname_rsa4096 VpncertificateSetting#certname_rsa4096}
  */
  readonly certnameRsa4096?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#check_ca_cert VpncertificateSetting#check_ca_cert}
  */
  readonly checkCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#check_ca_chain VpncertificateSetting#check_ca_chain}
  */
  readonly checkCaChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#cmp_key_usage_checking VpncertificateSetting#cmp_key_usage_checking}
  */
  readonly cmpKeyUsageChecking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#cmp_save_extra_certs VpncertificateSetting#cmp_save_extra_certs}
  */
  readonly cmpSaveExtraCerts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#cn_allow_multi VpncertificateSetting#cn_allow_multi}
  */
  readonly cnAllowMulti?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#cn_match VpncertificateSetting#cn_match}
  */
  readonly cnMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#get_all_tables VpncertificateSetting#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#id VpncertificateSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#interface VpncertificateSetting#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#interface_select_method VpncertificateSetting#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#ocsp_default_server VpncertificateSetting#ocsp_default_server}
  */
  readonly ocspDefaultServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#ocsp_option VpncertificateSetting#ocsp_option}
  */
  readonly ocspOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#ocsp_status VpncertificateSetting#ocsp_status}
  */
  readonly ocspStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#proxy VpncertificateSetting#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#proxy_password VpncertificateSetting#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#proxy_port VpncertificateSetting#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#proxy_username VpncertificateSetting#proxy_username}
  */
  readonly proxyUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#source_ip VpncertificateSetting#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#ssl_min_proto_version VpncertificateSetting#ssl_min_proto_version}
  */
  readonly sslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#ssl_ocsp_source_ip VpncertificateSetting#ssl_ocsp_source_ip}
  */
  readonly sslOcspSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#strict_crl_check VpncertificateSetting#strict_crl_check}
  */
  readonly strictCrlCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#strict_ocsp_check VpncertificateSetting#strict_ocsp_check}
  */
  readonly strictOcspCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#subject_match VpncertificateSetting#subject_match}
  */
  readonly subjectMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#subject_set VpncertificateSetting#subject_set}
  */
  readonly subjectSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#vdomparam VpncertificateSetting#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#vrf_select VpncertificateSetting#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * crl_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#crl_verification VpncertificateSetting#crl_verification}
  */
  readonly crlVerification?: VpncertificateSettingCrlVerification;
}
export interface VpncertificateSettingCrlVerification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#chain_crl_absence VpncertificateSetting#chain_crl_absence}
  */
  readonly chainCrlAbsence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#expiry VpncertificateSetting#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#leaf_crl_absence VpncertificateSetting#leaf_crl_absence}
  */
  readonly leafCrlAbsence?: string;
}

export function vpncertificateSettingCrlVerificationToTerraform(struct?: VpncertificateSettingCrlVerificationOutputReference | VpncertificateSettingCrlVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chain_crl_absence: cdktf.stringToTerraform(struct!.chainCrlAbsence),
    expiry: cdktf.stringToTerraform(struct!.expiry),
    leaf_crl_absence: cdktf.stringToTerraform(struct!.leafCrlAbsence),
  }
}


export function vpncertificateSettingCrlVerificationToHclTerraform(struct?: VpncertificateSettingCrlVerificationOutputReference | VpncertificateSettingCrlVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chain_crl_absence: {
      value: cdktf.stringToHclTerraform(struct!.chainCrlAbsence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry: {
      value: cdktf.stringToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leaf_crl_absence: {
      value: cdktf.stringToHclTerraform(struct!.leafCrlAbsence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpncertificateSettingCrlVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpncertificateSettingCrlVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chainCrlAbsence !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainCrlAbsence = this._chainCrlAbsence;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._leafCrlAbsence !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafCrlAbsence = this._leafCrlAbsence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpncertificateSettingCrlVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chainCrlAbsence = undefined;
      this._expiry = undefined;
      this._leafCrlAbsence = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chainCrlAbsence = value.chainCrlAbsence;
      this._expiry = value.expiry;
      this._leafCrlAbsence = value.leafCrlAbsence;
    }
  }

  // chain_crl_absence - computed: true, optional: true, required: false
  private _chainCrlAbsence?: string; 
  public get chainCrlAbsence() {
    return this.getStringAttribute('chain_crl_absence');
  }
  public set chainCrlAbsence(value: string) {
    this._chainCrlAbsence = value;
  }
  public resetChainCrlAbsence() {
    this._chainCrlAbsence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainCrlAbsenceInput() {
    return this._chainCrlAbsence;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // leaf_crl_absence - computed: true, optional: true, required: false
  private _leafCrlAbsence?: string; 
  public get leafCrlAbsence() {
    return this.getStringAttribute('leaf_crl_absence');
  }
  public set leafCrlAbsence(value: string) {
    this._leafCrlAbsence = value;
  }
  public resetLeafCrlAbsence() {
    this._leafCrlAbsence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCrlAbsenceInput() {
    return this._leafCrlAbsence;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting fortios_vpncertificate_setting}
*/
export class VpncertificateSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpncertificate_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpncertificateSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpncertificateSetting to import
  * @param importFromId The id of the existing VpncertificateSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpncertificateSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpncertificate_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpncertificate_setting fortios_vpncertificate_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpncertificateSettingConfig
  */
  public constructor(scope: Construct, id: string, config: VpncertificateSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpncertificate_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certExpireWarning = config.certExpireWarning;
    this._certnameDsa1024 = config.certnameDsa1024;
    this._certnameDsa2048 = config.certnameDsa2048;
    this._certnameEcdsa256 = config.certnameEcdsa256;
    this._certnameEcdsa384 = config.certnameEcdsa384;
    this._certnameEcdsa521 = config.certnameEcdsa521;
    this._certnameEd25519 = config.certnameEd25519;
    this._certnameEd448 = config.certnameEd448;
    this._certnameRsa1024 = config.certnameRsa1024;
    this._certnameRsa2048 = config.certnameRsa2048;
    this._certnameRsa4096 = config.certnameRsa4096;
    this._checkCaCert = config.checkCaCert;
    this._checkCaChain = config.checkCaChain;
    this._cmpKeyUsageChecking = config.cmpKeyUsageChecking;
    this._cmpSaveExtraCerts = config.cmpSaveExtraCerts;
    this._cnAllowMulti = config.cnAllowMulti;
    this._cnMatch = config.cnMatch;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ocspDefaultServer = config.ocspDefaultServer;
    this._ocspOption = config.ocspOption;
    this._ocspStatus = config.ocspStatus;
    this._proxy = config.proxy;
    this._proxyPassword = config.proxyPassword;
    this._proxyPort = config.proxyPort;
    this._proxyUsername = config.proxyUsername;
    this._sourceIp = config.sourceIp;
    this._sslMinProtoVersion = config.sslMinProtoVersion;
    this._sslOcspSourceIp = config.sslOcspSourceIp;
    this._strictCrlCheck = config.strictCrlCheck;
    this._strictOcspCheck = config.strictOcspCheck;
    this._subjectMatch = config.subjectMatch;
    this._subjectSet = config.subjectSet;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
    this._crlVerification.internalValue = config.crlVerification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_expire_warning - computed: true, optional: true, required: false
  private _certExpireWarning?: number; 
  public get certExpireWarning() {
    return this.getNumberAttribute('cert_expire_warning');
  }
  public set certExpireWarning(value: number) {
    this._certExpireWarning = value;
  }
  public resetCertExpireWarning() {
    this._certExpireWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certExpireWarningInput() {
    return this._certExpireWarning;
  }

  // certname_dsa1024 - computed: false, optional: false, required: true
  private _certnameDsa1024?: string; 
  public get certnameDsa1024() {
    return this.getStringAttribute('certname_dsa1024');
  }
  public set certnameDsa1024(value: string) {
    this._certnameDsa1024 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameDsa1024Input() {
    return this._certnameDsa1024;
  }

  // certname_dsa2048 - computed: false, optional: false, required: true
  private _certnameDsa2048?: string; 
  public get certnameDsa2048() {
    return this.getStringAttribute('certname_dsa2048');
  }
  public set certnameDsa2048(value: string) {
    this._certnameDsa2048 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameDsa2048Input() {
    return this._certnameDsa2048;
  }

  // certname_ecdsa256 - computed: false, optional: false, required: true
  private _certnameEcdsa256?: string; 
  public get certnameEcdsa256() {
    return this.getStringAttribute('certname_ecdsa256');
  }
  public set certnameEcdsa256(value: string) {
    this._certnameEcdsa256 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameEcdsa256Input() {
    return this._certnameEcdsa256;
  }

  // certname_ecdsa384 - computed: false, optional: false, required: true
  private _certnameEcdsa384?: string; 
  public get certnameEcdsa384() {
    return this.getStringAttribute('certname_ecdsa384');
  }
  public set certnameEcdsa384(value: string) {
    this._certnameEcdsa384 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameEcdsa384Input() {
    return this._certnameEcdsa384;
  }

  // certname_ecdsa521 - computed: true, optional: true, required: false
  private _certnameEcdsa521?: string; 
  public get certnameEcdsa521() {
    return this.getStringAttribute('certname_ecdsa521');
  }
  public set certnameEcdsa521(value: string) {
    this._certnameEcdsa521 = value;
  }
  public resetCertnameEcdsa521() {
    this._certnameEcdsa521 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameEcdsa521Input() {
    return this._certnameEcdsa521;
  }

  // certname_ed25519 - computed: true, optional: true, required: false
  private _certnameEd25519?: string; 
  public get certnameEd25519() {
    return this.getStringAttribute('certname_ed25519');
  }
  public set certnameEd25519(value: string) {
    this._certnameEd25519 = value;
  }
  public resetCertnameEd25519() {
    this._certnameEd25519 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameEd25519Input() {
    return this._certnameEd25519;
  }

  // certname_ed448 - computed: true, optional: true, required: false
  private _certnameEd448?: string; 
  public get certnameEd448() {
    return this.getStringAttribute('certname_ed448');
  }
  public set certnameEd448(value: string) {
    this._certnameEd448 = value;
  }
  public resetCertnameEd448() {
    this._certnameEd448 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameEd448Input() {
    return this._certnameEd448;
  }

  // certname_rsa1024 - computed: false, optional: false, required: true
  private _certnameRsa1024?: string; 
  public get certnameRsa1024() {
    return this.getStringAttribute('certname_rsa1024');
  }
  public set certnameRsa1024(value: string) {
    this._certnameRsa1024 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameRsa1024Input() {
    return this._certnameRsa1024;
  }

  // certname_rsa2048 - computed: false, optional: false, required: true
  private _certnameRsa2048?: string; 
  public get certnameRsa2048() {
    return this.getStringAttribute('certname_rsa2048');
  }
  public set certnameRsa2048(value: string) {
    this._certnameRsa2048 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameRsa2048Input() {
    return this._certnameRsa2048;
  }

  // certname_rsa4096 - computed: true, optional: true, required: false
  private _certnameRsa4096?: string; 
  public get certnameRsa4096() {
    return this.getStringAttribute('certname_rsa4096');
  }
  public set certnameRsa4096(value: string) {
    this._certnameRsa4096 = value;
  }
  public resetCertnameRsa4096() {
    this._certnameRsa4096 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certnameRsa4096Input() {
    return this._certnameRsa4096;
  }

  // check_ca_cert - computed: true, optional: true, required: false
  private _checkCaCert?: string; 
  public get checkCaCert() {
    return this.getStringAttribute('check_ca_cert');
  }
  public set checkCaCert(value: string) {
    this._checkCaCert = value;
  }
  public resetCheckCaCert() {
    this._checkCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCaCertInput() {
    return this._checkCaCert;
  }

  // check_ca_chain - computed: true, optional: true, required: false
  private _checkCaChain?: string; 
  public get checkCaChain() {
    return this.getStringAttribute('check_ca_chain');
  }
  public set checkCaChain(value: string) {
    this._checkCaChain = value;
  }
  public resetCheckCaChain() {
    this._checkCaChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCaChainInput() {
    return this._checkCaChain;
  }

  // cmp_key_usage_checking - computed: true, optional: true, required: false
  private _cmpKeyUsageChecking?: string; 
  public get cmpKeyUsageChecking() {
    return this.getStringAttribute('cmp_key_usage_checking');
  }
  public set cmpKeyUsageChecking(value: string) {
    this._cmpKeyUsageChecking = value;
  }
  public resetCmpKeyUsageChecking() {
    this._cmpKeyUsageChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpKeyUsageCheckingInput() {
    return this._cmpKeyUsageChecking;
  }

  // cmp_save_extra_certs - computed: true, optional: true, required: false
  private _cmpSaveExtraCerts?: string; 
  public get cmpSaveExtraCerts() {
    return this.getStringAttribute('cmp_save_extra_certs');
  }
  public set cmpSaveExtraCerts(value: string) {
    this._cmpSaveExtraCerts = value;
  }
  public resetCmpSaveExtraCerts() {
    this._cmpSaveExtraCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpSaveExtraCertsInput() {
    return this._cmpSaveExtraCerts;
  }

  // cn_allow_multi - computed: true, optional: true, required: false
  private _cnAllowMulti?: string; 
  public get cnAllowMulti() {
    return this.getStringAttribute('cn_allow_multi');
  }
  public set cnAllowMulti(value: string) {
    this._cnAllowMulti = value;
  }
  public resetCnAllowMulti() {
    this._cnAllowMulti = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnAllowMultiInput() {
    return this._cnAllowMulti;
  }

  // cn_match - computed: true, optional: true, required: false
  private _cnMatch?: string; 
  public get cnMatch() {
    return this.getStringAttribute('cn_match');
  }
  public set cnMatch(value: string) {
    this._cnMatch = value;
  }
  public resetCnMatch() {
    this._cnMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnMatchInput() {
    return this._cnMatch;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ocsp_default_server - computed: false, optional: true, required: false
  private _ocspDefaultServer?: string; 
  public get ocspDefaultServer() {
    return this.getStringAttribute('ocsp_default_server');
  }
  public set ocspDefaultServer(value: string) {
    this._ocspDefaultServer = value;
  }
  public resetOcspDefaultServer() {
    this._ocspDefaultServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspDefaultServerInput() {
    return this._ocspDefaultServer;
  }

  // ocsp_option - computed: true, optional: true, required: false
  private _ocspOption?: string; 
  public get ocspOption() {
    return this.getStringAttribute('ocsp_option');
  }
  public set ocspOption(value: string) {
    this._ocspOption = value;
  }
  public resetOcspOption() {
    this._ocspOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspOptionInput() {
    return this._ocspOption;
  }

  // ocsp_status - computed: true, optional: true, required: false
  private _ocspStatus?: string; 
  public get ocspStatus() {
    return this.getStringAttribute('ocsp_status');
  }
  public set ocspStatus(value: string) {
    this._ocspStatus = value;
  }
  public resetOcspStatus() {
    this._ocspStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStatusInput() {
    return this._ocspStatus;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // proxy_password - computed: false, optional: true, required: false
  private _proxyPassword?: string; 
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }
  public set proxyPassword(value: string) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_port - computed: true, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_username - computed: false, optional: true, required: false
  private _proxyUsername?: string; 
  public get proxyUsername() {
    return this.getStringAttribute('proxy_username');
  }
  public set proxyUsername(value: string) {
    this._proxyUsername = value;
  }
  public resetProxyUsername() {
    this._proxyUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUsernameInput() {
    return this._proxyUsername;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // ssl_min_proto_version - computed: true, optional: true, required: false
  private _sslMinProtoVersion?: string; 
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }
  public set sslMinProtoVersion(value: string) {
    this._sslMinProtoVersion = value;
  }
  public resetSslMinProtoVersion() {
    this._sslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVersionInput() {
    return this._sslMinProtoVersion;
  }

  // ssl_ocsp_source_ip - computed: true, optional: true, required: false
  private _sslOcspSourceIp?: string; 
  public get sslOcspSourceIp() {
    return this.getStringAttribute('ssl_ocsp_source_ip');
  }
  public set sslOcspSourceIp(value: string) {
    this._sslOcspSourceIp = value;
  }
  public resetSslOcspSourceIp() {
    this._sslOcspSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslOcspSourceIpInput() {
    return this._sslOcspSourceIp;
  }

  // strict_crl_check - computed: true, optional: true, required: false
  private _strictCrlCheck?: string; 
  public get strictCrlCheck() {
    return this.getStringAttribute('strict_crl_check');
  }
  public set strictCrlCheck(value: string) {
    this._strictCrlCheck = value;
  }
  public resetStrictCrlCheck() {
    this._strictCrlCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCrlCheckInput() {
    return this._strictCrlCheck;
  }

  // strict_ocsp_check - computed: true, optional: true, required: false
  private _strictOcspCheck?: string; 
  public get strictOcspCheck() {
    return this.getStringAttribute('strict_ocsp_check');
  }
  public set strictOcspCheck(value: string) {
    this._strictOcspCheck = value;
  }
  public resetStrictOcspCheck() {
    this._strictOcspCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictOcspCheckInput() {
    return this._strictOcspCheck;
  }

  // subject_match - computed: true, optional: true, required: false
  private _subjectMatch?: string; 
  public get subjectMatch() {
    return this.getStringAttribute('subject_match');
  }
  public set subjectMatch(value: string) {
    this._subjectMatch = value;
  }
  public resetSubjectMatch() {
    this._subjectMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectMatchInput() {
    return this._subjectMatch;
  }

  // subject_set - computed: true, optional: true, required: false
  private _subjectSet?: string; 
  public get subjectSet() {
    return this.getStringAttribute('subject_set');
  }
  public set subjectSet(value: string) {
    this._subjectSet = value;
  }
  public resetSubjectSet() {
    this._subjectSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectSetInput() {
    return this._subjectSet;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // crl_verification - computed: false, optional: true, required: false
  private _crlVerification = new VpncertificateSettingCrlVerificationOutputReference(this, "crl_verification");
  public get crlVerification() {
    return this._crlVerification;
  }
  public putCrlVerification(value: VpncertificateSettingCrlVerification) {
    this._crlVerification.internalValue = value;
  }
  public resetCrlVerification() {
    this._crlVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlVerificationInput() {
    return this._crlVerification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_expire_warning: cdktf.numberToTerraform(this._certExpireWarning),
      certname_dsa1024: cdktf.stringToTerraform(this._certnameDsa1024),
      certname_dsa2048: cdktf.stringToTerraform(this._certnameDsa2048),
      certname_ecdsa256: cdktf.stringToTerraform(this._certnameEcdsa256),
      certname_ecdsa384: cdktf.stringToTerraform(this._certnameEcdsa384),
      certname_ecdsa521: cdktf.stringToTerraform(this._certnameEcdsa521),
      certname_ed25519: cdktf.stringToTerraform(this._certnameEd25519),
      certname_ed448: cdktf.stringToTerraform(this._certnameEd448),
      certname_rsa1024: cdktf.stringToTerraform(this._certnameRsa1024),
      certname_rsa2048: cdktf.stringToTerraform(this._certnameRsa2048),
      certname_rsa4096: cdktf.stringToTerraform(this._certnameRsa4096),
      check_ca_cert: cdktf.stringToTerraform(this._checkCaCert),
      check_ca_chain: cdktf.stringToTerraform(this._checkCaChain),
      cmp_key_usage_checking: cdktf.stringToTerraform(this._cmpKeyUsageChecking),
      cmp_save_extra_certs: cdktf.stringToTerraform(this._cmpSaveExtraCerts),
      cn_allow_multi: cdktf.stringToTerraform(this._cnAllowMulti),
      cn_match: cdktf.stringToTerraform(this._cnMatch),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ocsp_default_server: cdktf.stringToTerraform(this._ocspDefaultServer),
      ocsp_option: cdktf.stringToTerraform(this._ocspOption),
      ocsp_status: cdktf.stringToTerraform(this._ocspStatus),
      proxy: cdktf.stringToTerraform(this._proxy),
      proxy_password: cdktf.stringToTerraform(this._proxyPassword),
      proxy_port: cdktf.numberToTerraform(this._proxyPort),
      proxy_username: cdktf.stringToTerraform(this._proxyUsername),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      ssl_min_proto_version: cdktf.stringToTerraform(this._sslMinProtoVersion),
      ssl_ocsp_source_ip: cdktf.stringToTerraform(this._sslOcspSourceIp),
      strict_crl_check: cdktf.stringToTerraform(this._strictCrlCheck),
      strict_ocsp_check: cdktf.stringToTerraform(this._strictOcspCheck),
      subject_match: cdktf.stringToTerraform(this._subjectMatch),
      subject_set: cdktf.stringToTerraform(this._subjectSet),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      crl_verification: vpncertificateSettingCrlVerificationToTerraform(this._crlVerification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_expire_warning: {
        value: cdktf.numberToHclTerraform(this._certExpireWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certname_dsa1024: {
        value: cdktf.stringToHclTerraform(this._certnameDsa1024),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_dsa2048: {
        value: cdktf.stringToHclTerraform(this._certnameDsa2048),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_ecdsa256: {
        value: cdktf.stringToHclTerraform(this._certnameEcdsa256),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_ecdsa384: {
        value: cdktf.stringToHclTerraform(this._certnameEcdsa384),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_ecdsa521: {
        value: cdktf.stringToHclTerraform(this._certnameEcdsa521),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_ed25519: {
        value: cdktf.stringToHclTerraform(this._certnameEd25519),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_ed448: {
        value: cdktf.stringToHclTerraform(this._certnameEd448),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_rsa1024: {
        value: cdktf.stringToHclTerraform(this._certnameRsa1024),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_rsa2048: {
        value: cdktf.stringToHclTerraform(this._certnameRsa2048),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certname_rsa4096: {
        value: cdktf.stringToHclTerraform(this._certnameRsa4096),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_ca_cert: {
        value: cdktf.stringToHclTerraform(this._checkCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      check_ca_chain: {
        value: cdktf.stringToHclTerraform(this._checkCaChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmp_key_usage_checking: {
        value: cdktf.stringToHclTerraform(this._cmpKeyUsageChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmp_save_extra_certs: {
        value: cdktf.stringToHclTerraform(this._cmpSaveExtraCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn_allow_multi: {
        value: cdktf.stringToHclTerraform(this._cnAllowMulti),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn_match: {
        value: cdktf.stringToHclTerraform(this._cnMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_default_server: {
        value: cdktf.stringToHclTerraform(this._ocspDefaultServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_option: {
        value: cdktf.stringToHclTerraform(this._ocspOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_status: {
        value: cdktf.stringToHclTerraform(this._ocspStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_password: {
        value: cdktf.stringToHclTerraform(this._proxyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_port: {
        value: cdktf.numberToHclTerraform(this._proxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_username: {
        value: cdktf.stringToHclTerraform(this._proxyUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ocsp_source_ip: {
        value: cdktf.stringToHclTerraform(this._sslOcspSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_crl_check: {
        value: cdktf.stringToHclTerraform(this._strictCrlCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_ocsp_check: {
        value: cdktf.stringToHclTerraform(this._strictOcspCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_match: {
        value: cdktf.stringToHclTerraform(this._subjectMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_set: {
        value: cdktf.stringToHclTerraform(this._subjectSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crl_verification: {
        value: vpncertificateSettingCrlVerificationToHclTerraform(this._crlVerification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpncertificateSettingCrlVerificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
