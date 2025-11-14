// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnCertificateHsmlocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#adom ObjectVpnCertificateHsmlocal#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#api_version ObjectVpnCertificateHsmlocal#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#certificate ObjectVpnCertificateHsmlocal#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#comments ObjectVpnCertificateHsmlocal#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_cloud_service_name ObjectVpnCertificateHsmlocal#gch_cloud_service_name}
  */
  readonly gchCloudServiceName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_cryptokey ObjectVpnCertificateHsmlocal#gch_cryptokey}
  */
  readonly gchCryptokey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_cryptokey_algorithm ObjectVpnCertificateHsmlocal#gch_cryptokey_algorithm}
  */
  readonly gchCryptokeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_cryptokey_version ObjectVpnCertificateHsmlocal#gch_cryptokey_version}
  */
  readonly gchCryptokeyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_keyring ObjectVpnCertificateHsmlocal#gch_keyring}
  */
  readonly gchKeyring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_location ObjectVpnCertificateHsmlocal#gch_location}
  */
  readonly gchLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_project ObjectVpnCertificateHsmlocal#gch_project}
  */
  readonly gchProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#gch_url ObjectVpnCertificateHsmlocal#gch_url}
  */
  readonly gchUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#id ObjectVpnCertificateHsmlocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#name ObjectVpnCertificateHsmlocal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#range ObjectVpnCertificateHsmlocal#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#scopetype ObjectVpnCertificateHsmlocal#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#source ObjectVpnCertificateHsmlocal#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#tmp_cert_file ObjectVpnCertificateHsmlocal#tmp_cert_file}
  */
  readonly tmpCertFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#vendor ObjectVpnCertificateHsmlocal#vendor}
  */
  readonly vendor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal fortimanager_object_vpn_certificate_hsmlocal}
*/
export class ObjectVpnCertificateHsmlocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_certificate_hsmlocal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnCertificateHsmlocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnCertificateHsmlocal to import
  * @param importFromId The id of the existing ObjectVpnCertificateHsmlocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnCertificateHsmlocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_certificate_hsmlocal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_certificate_hsmlocal fortimanager_object_vpn_certificate_hsmlocal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnCertificateHsmlocalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnCertificateHsmlocalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_certificate_hsmlocal',
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
    this._apiVersion = config.apiVersion;
    this._certificate = config.certificate;
    this._comments = config.comments;
    this._gchCloudServiceName = config.gchCloudServiceName;
    this._gchCryptokey = config.gchCryptokey;
    this._gchCryptokeyAlgorithm = config.gchCryptokeyAlgorithm;
    this._gchCryptokeyVersion = config.gchCryptokeyVersion;
    this._gchKeyring = config.gchKeyring;
    this._gchLocation = config.gchLocation;
    this._gchProject = config.gchProject;
    this._gchUrl = config.gchUrl;
    this._id = config.id;
    this._name = config.name;
    this._range = config.range;
    this._scopetype = config.scopetype;
    this._source = config.source;
    this._tmpCertFile = config.tmpCertFile;
    this._vendor = config.vendor;
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

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // gch_cloud_service_name - computed: true, optional: true, required: false
  private _gchCloudServiceName?: string[]; 
  public get gchCloudServiceName() {
    return cdktf.Fn.tolist(this.getListAttribute('gch_cloud_service_name'));
  }
  public set gchCloudServiceName(value: string[]) {
    this._gchCloudServiceName = value;
  }
  public resetGchCloudServiceName() {
    this._gchCloudServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchCloudServiceNameInput() {
    return this._gchCloudServiceName;
  }

  // gch_cryptokey - computed: false, optional: true, required: false
  private _gchCryptokey?: string; 
  public get gchCryptokey() {
    return this.getStringAttribute('gch_cryptokey');
  }
  public set gchCryptokey(value: string) {
    this._gchCryptokey = value;
  }
  public resetGchCryptokey() {
    this._gchCryptokey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchCryptokeyInput() {
    return this._gchCryptokey;
  }

  // gch_cryptokey_algorithm - computed: true, optional: true, required: false
  private _gchCryptokeyAlgorithm?: string; 
  public get gchCryptokeyAlgorithm() {
    return this.getStringAttribute('gch_cryptokey_algorithm');
  }
  public set gchCryptokeyAlgorithm(value: string) {
    this._gchCryptokeyAlgorithm = value;
  }
  public resetGchCryptokeyAlgorithm() {
    this._gchCryptokeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchCryptokeyAlgorithmInput() {
    return this._gchCryptokeyAlgorithm;
  }

  // gch_cryptokey_version - computed: false, optional: true, required: false
  private _gchCryptokeyVersion?: string; 
  public get gchCryptokeyVersion() {
    return this.getStringAttribute('gch_cryptokey_version');
  }
  public set gchCryptokeyVersion(value: string) {
    this._gchCryptokeyVersion = value;
  }
  public resetGchCryptokeyVersion() {
    this._gchCryptokeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchCryptokeyVersionInput() {
    return this._gchCryptokeyVersion;
  }

  // gch_keyring - computed: false, optional: true, required: false
  private _gchKeyring?: string; 
  public get gchKeyring() {
    return this.getStringAttribute('gch_keyring');
  }
  public set gchKeyring(value: string) {
    this._gchKeyring = value;
  }
  public resetGchKeyring() {
    this._gchKeyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchKeyringInput() {
    return this._gchKeyring;
  }

  // gch_location - computed: false, optional: true, required: false
  private _gchLocation?: string; 
  public get gchLocation() {
    return this.getStringAttribute('gch_location');
  }
  public set gchLocation(value: string) {
    this._gchLocation = value;
  }
  public resetGchLocation() {
    this._gchLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchLocationInput() {
    return this._gchLocation;
  }

  // gch_project - computed: false, optional: true, required: false
  private _gchProject?: string; 
  public get gchProject() {
    return this.getStringAttribute('gch_project');
  }
  public set gchProject(value: string) {
    this._gchProject = value;
  }
  public resetGchProject() {
    this._gchProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchProjectInput() {
    return this._gchProject;
  }

  // gch_url - computed: false, optional: true, required: false
  private _gchUrl?: string; 
  public get gchUrl() {
    return this.getStringAttribute('gch_url');
  }
  public set gchUrl(value: string) {
    this._gchUrl = value;
  }
  public resetGchUrl() {
    this._gchUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gchUrlInput() {
    return this._gchUrl;
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

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
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

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // tmp_cert_file - computed: false, optional: true, required: false
  private _tmpCertFile?: string; 
  public get tmpCertFile() {
    return this.getStringAttribute('tmp_cert_file');
  }
  public set tmpCertFile(value: string) {
    this._tmpCertFile = value;
  }
  public resetTmpCertFile() {
    this._tmpCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpCertFileInput() {
    return this._tmpCertFile;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      api_version: cdktf.stringToTerraform(this._apiVersion),
      certificate: cdktf.stringToTerraform(this._certificate),
      comments: cdktf.stringToTerraform(this._comments),
      gch_cloud_service_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gchCloudServiceName),
      gch_cryptokey: cdktf.stringToTerraform(this._gchCryptokey),
      gch_cryptokey_algorithm: cdktf.stringToTerraform(this._gchCryptokeyAlgorithm),
      gch_cryptokey_version: cdktf.stringToTerraform(this._gchCryptokeyVersion),
      gch_keyring: cdktf.stringToTerraform(this._gchKeyring),
      gch_location: cdktf.stringToTerraform(this._gchLocation),
      gch_project: cdktf.stringToTerraform(this._gchProject),
      gch_url: cdktf.stringToTerraform(this._gchUrl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      range: cdktf.stringToTerraform(this._range),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      source: cdktf.stringToTerraform(this._source),
      tmp_cert_file: cdktf.stringToTerraform(this._tmpCertFile),
      vendor: cdktf.stringToTerraform(this._vendor),
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
      api_version: {
        value: cdktf.stringToHclTerraform(this._apiVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gch_cloud_service_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gchCloudServiceName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gch_cryptokey: {
        value: cdktf.stringToHclTerraform(this._gchCryptokey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gch_cryptokey_algorithm: {
        value: cdktf.stringToHclTerraform(this._gchCryptokeyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gch_cryptokey_version: {
        value: cdktf.stringToHclTerraform(this._gchCryptokeyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gch_keyring: {
        value: cdktf.stringToHclTerraform(this._gchKeyring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gch_location: {
        value: cdktf.stringToHclTerraform(this._gchLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gch_project: {
        value: cdktf.stringToHclTerraform(this._gchProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gch_url: {
        value: cdktf.stringToHclTerraform(this._gchUrl),
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
      range: {
        value: cdktf.stringToHclTerraform(this._range),
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
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tmp_cert_file: {
        value: cdktf.stringToHclTerraform(this._tmpCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
