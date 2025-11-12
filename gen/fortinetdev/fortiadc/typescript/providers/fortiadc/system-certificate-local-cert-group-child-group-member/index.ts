// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCertificateLocalCertGroupChildGroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#default SystemCertificateLocalCertGroupChildGroupMember#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#extra_intermediate_cag SystemCertificateLocalCertGroupChildGroupMember#extra_intermediate_cag}
  */
  readonly extraIntermediateCag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#extra_local_cert SystemCertificateLocalCertGroupChildGroupMember#extra_local_cert}
  */
  readonly extraLocalCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#extra_ocsp_stapling SystemCertificateLocalCertGroupChildGroupMember#extra_ocsp_stapling}
  */
  readonly extraOcspStapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#id SystemCertificateLocalCertGroupChildGroupMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#intermediate_cag SystemCertificateLocalCertGroupChildGroupMember#intermediate_cag}
  */
  readonly intermediateCag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#local_cert SystemCertificateLocalCertGroupChildGroupMember#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#mkey SystemCertificateLocalCertGroupChildGroupMember#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#ocsp_stapling SystemCertificateLocalCertGroupChildGroupMember#ocsp_stapling}
  */
  readonly ocspStapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#pkey SystemCertificateLocalCertGroupChildGroupMember#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#vdom SystemCertificateLocalCertGroupChildGroupMember#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member fortiadc_system_certificate_local_cert_group_child_group_member}
*/
export class SystemCertificateLocalCertGroupChildGroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_certificate_local_cert_group_child_group_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCertificateLocalCertGroupChildGroupMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCertificateLocalCertGroupChildGroupMember to import
  * @param importFromId The id of the existing SystemCertificateLocalCertGroupChildGroupMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCertificateLocalCertGroupChildGroupMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_certificate_local_cert_group_child_group_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_local_cert_group_child_group_member fortiadc_system_certificate_local_cert_group_child_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCertificateLocalCertGroupChildGroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCertificateLocalCertGroupChildGroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_certificate_local_cert_group_child_group_member',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._extraIntermediateCag = config.extraIntermediateCag;
    this._extraLocalCert = config.extraLocalCert;
    this._extraOcspStapling = config.extraOcspStapling;
    this._id = config.id;
    this._intermediateCag = config.intermediateCag;
    this._localCert = config.localCert;
    this._mkey = config.mkey;
    this._ocspStapling = config.ocspStapling;
    this._pkey = config.pkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // extra_intermediate_cag - computed: true, optional: true, required: false
  private _extraIntermediateCag?: string; 
  public get extraIntermediateCag() {
    return this.getStringAttribute('extra_intermediate_cag');
  }
  public set extraIntermediateCag(value: string) {
    this._extraIntermediateCag = value;
  }
  public resetExtraIntermediateCag() {
    this._extraIntermediateCag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraIntermediateCagInput() {
    return this._extraIntermediateCag;
  }

  // extra_local_cert - computed: true, optional: true, required: false
  private _extraLocalCert?: string; 
  public get extraLocalCert() {
    return this.getStringAttribute('extra_local_cert');
  }
  public set extraLocalCert(value: string) {
    this._extraLocalCert = value;
  }
  public resetExtraLocalCert() {
    this._extraLocalCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraLocalCertInput() {
    return this._extraLocalCert;
  }

  // extra_ocsp_stapling - computed: true, optional: true, required: false
  private _extraOcspStapling?: string; 
  public get extraOcspStapling() {
    return this.getStringAttribute('extra_ocsp_stapling');
  }
  public set extraOcspStapling(value: string) {
    this._extraOcspStapling = value;
  }
  public resetExtraOcspStapling() {
    this._extraOcspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraOcspStaplingInput() {
    return this._extraOcspStapling;
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

  // intermediate_cag - computed: true, optional: true, required: false
  private _intermediateCag?: string; 
  public get intermediateCag() {
    return this.getStringAttribute('intermediate_cag');
  }
  public set intermediateCag(value: string) {
    this._intermediateCag = value;
  }
  public resetIntermediateCag() {
    this._intermediateCag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCagInput() {
    return this._intermediateCag;
  }

  // local_cert - computed: true, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
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

  // ocsp_stapling - computed: true, optional: true, required: false
  private _ocspStapling?: string; 
  public get ocspStapling() {
    return this.getStringAttribute('ocsp_stapling');
  }
  public set ocspStapling(value: string) {
    this._ocspStapling = value;
  }
  public resetOcspStapling() {
    this._ocspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingInput() {
    return this._ocspStapling;
  }

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
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
      default: cdktf.stringToTerraform(this._default),
      extra_intermediate_cag: cdktf.stringToTerraform(this._extraIntermediateCag),
      extra_local_cert: cdktf.stringToTerraform(this._extraLocalCert),
      extra_ocsp_stapling: cdktf.stringToTerraform(this._extraOcspStapling),
      id: cdktf.stringToTerraform(this._id),
      intermediate_cag: cdktf.stringToTerraform(this._intermediateCag),
      local_cert: cdktf.stringToTerraform(this._localCert),
      mkey: cdktf.stringToTerraform(this._mkey),
      ocsp_stapling: cdktf.stringToTerraform(this._ocspStapling),
      pkey: cdktf.stringToTerraform(this._pkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.stringToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_intermediate_cag: {
        value: cdktf.stringToHclTerraform(this._extraIntermediateCag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_local_cert: {
        value: cdktf.stringToHclTerraform(this._extraLocalCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_ocsp_stapling: {
        value: cdktf.stringToHclTerraform(this._extraOcspStapling),
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
      intermediate_cag: {
        value: cdktf.stringToHclTerraform(this._intermediateCag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
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
      ocsp_stapling: {
        value: cdktf.stringToHclTerraform(this._ocspStapling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
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
