// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * aFleX Script Source File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#aflex Import#aflex}
  */
  readonly aflex?: string;
  /**
  * JSON web key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#auth_jwks Import#auth_jwks}
  */
  readonly authJwks?: string;
  /**
  * Portal file for http authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#auth_portal Import#auth_portal}
  */
  readonly authPortal?: string;
  /**
  * Image file for default portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#auth_portal_image Import#auth_portal_image}
  */
  readonly authPortalImage?: string;
  /**
  * Background mode for importing class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#background Import#background}
  */
  readonly background?: number;
  /**
  * BIOS Image file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#bios_file Import#bios_file}
  */
  readonly biosFile?: string;
  /**
  * Black white List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#bw_list Import#bw_list}
  */
  readonly bwList?: string;
  /**
  * CA Cert File(enter bulk when import an archive file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ca_cert Import#ca_cert}
  */
  readonly caCert?: string;
  /**
  * 'pem': pem; 'der': der; 'pfx': pfx; 'p7b': p7b;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#certificate_type Import#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Class List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#class_list Import#class_list}
  */
  readonly classList?: string;
  /**
  * Convert Class List File to A10 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#class_list_convert Import#class_list_convert}
  */
  readonly classListConvert?: string;
  /**
  * 'ac': ac; 'ipv4': ipv4; 'ipv6': ipv6; 'string': string; 'string-case-insensitive': string-case-insensitive;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#class_list_type Import#class_list_type}
  */
  readonly classListType?: string;
  /**
  * Cloud Configuration File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#cloud_config Import#cloud_config}
  */
  readonly cloudConfig?: string;
  /**
  * Cloud Credentials File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#cloud_creds Import#cloud_creds}
  */
  readonly cloudCreds?: string;
  /**
  * Generate CSR file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#csr_generate Import#csr_generate}
  */
  readonly csrGenerate?: number;
  /**
  * Python/Perl/Bash/TCL script to be used with ddos action-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ddos_script Import#ddos_script}
  */
  readonly ddosScript?: string;
  /**
  * 'sha1': sha1; 'sha256': sha256; 'sha384': sha384; 'sha512': sha512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#digest Import#digest}
  */
  readonly digest?: string;
  /**
  * DNSSEC DNSKEY(KSK) file for child zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#dnssec_dnskey Import#dnssec_dnskey}
  */
  readonly dnssecDnskey?: string;
  /**
  * DNSSEC DS file for child zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#dnssec_ds Import#dnssec_ds}
  */
  readonly dnssecDs?: string;
  /**
  * Domain List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#domain_list Import#domain_list}
  */
  readonly domainList?: string;
  /**
  * Geo-location CSV File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#geo_location Import#geo_location}
  */
  readonly geoLocation?: string;
  /**
  * GLM certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#glm_cert Import#glm_cert}
  */
  readonly glmCert?: string;
  /**
  * License File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#glm_license Import#glm_license}
  */
  readonly glmLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#id Import#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Map List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ip_map_list Import#ip_map_list}
  */
  readonly ipMapList?: string;
  /**
  * Local URI files for http response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#local_uri_file Import#local_uri_file}
  */
  readonly localUriFile?: string;
  /**
  * LW-4over6 Binding Table File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#lw_4o6 Import#lw_4o6}
  */
  readonly lw4O6?: string;
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#overwrite Import#overwrite}
  */
  readonly overwrite?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#password Import#password}
  */
  readonly password?: string;
  /**
  * The password for certificate file (pfx type only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#pfx_password Import#pfx_password}
  */
  readonly pfxPassword?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#proxy Import#proxy}
  */
  readonly proxy?: string;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file_zone_transfer Import#remote_file_zone_transfer}
  */
  readonly remoteFileZoneTransfer?: string;
  /**
  * Response Policy Zone File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#rpz Import#rpz}
  */
  readonly rpz?: string;
  /**
  * Mark as non-exportable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#secured Import#secured}
  */
  readonly secured?: number;
  /**
  * SSL Cert File(enter bulk when import an archive file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ssl_cert Import#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * 'bulk': import an archive file;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ssl_cert_key Import#ssl_cert_key}
  */
  readonly sslCertKey?: string;
  /**
  * SSL Crl File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ssl_crl Import#ssl_crl}
  */
  readonly sslCrl?: string;
  /**
  * SSL Key File(enter bulk when import an archive file)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ssl_key Import#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Import store name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#store_name Import#store_name}
  */
  readonly storeName?: string;
  /**
  * terminal vi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#terminal Import#terminal}
  */
  readonly terminal?: number;
  /**
  * Thales Kmdata files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#thales_kmdata Import#thales_kmdata}
  */
  readonly thalesKmdata?: string;
  /**
  * Thales security world files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#thales_secworld Import#thales_secworld}
  */
  readonly thalesSecworld?: string;
  /**
  * Transaction SIGnatures Key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#tsig Import#tsig}
  */
  readonly tsig?: string;
  /**
  * USB License File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#usb_license Import#usb_license}
  */
  readonly usbLicense?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Use private key to authenticate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_ssh_key Import#use_ssh_key}
  */
  readonly useSshKey?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#user_tag Import#user_tag}
  */
  readonly userTag?: string;
  /**
  * License file to enable web-category feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#web_category_license Import#web_category_license}
  */
  readonly webCategoryLicense?: string;
  /**
  * XML-Schema File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#xml_schema Import#xml_schema}
  */
  readonly xmlSchema?: string;
  /**
  * 'zone-transfer': zone-transfer;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#zone_transfer Import#zone_transfer}
  */
  readonly zoneTransfer?: string;
  /**
  * auth_saml_idp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#auth_saml_idp Import#auth_saml_idp}
  */
  readonly authSamlIdp?: ImportAuthSamlIdp;
  /**
  * geo_location_archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#geo_location_archive Import#geo_location_archive}
  */
  readonly geoLocationArchive?: ImportGeoLocationArchive;
  /**
  * health_external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#health_external Import#health_external}
  */
  readonly healthExternal?: ImportHealthExternal;
  /**
  * health_postfile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#health_postfile Import#health_postfile}
  */
  readonly healthPostfile?: ImportHealthPostfile;
  /**
  * ng_waf_custom_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ng_waf_custom_page Import#ng_waf_custom_page}
  */
  readonly ngWafCustomPage?: ImportNgWafCustomPage;
  /**
  * ng_waf_module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#ng_waf_module Import#ng_waf_module}
  */
  readonly ngWafModule?: ImportNgWafModule;
  /**
  * store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#store Import#store}
  */
  readonly store?: ImportStore;
  /**
  * to_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#to_device Import#to_device}
  */
  readonly toDevice?: ImportToDevice;
}
export interface ImportAuthSamlIdp {
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#overwrite Import#overwrite}
  */
  readonly overwrite?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#password Import#password}
  */
  readonly password?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#proxy Import#proxy}
  */
  readonly proxy?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Metadata name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#saml_idp_name Import#saml_idp_name}
  */
  readonly samlIdpName?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Verify metadata's XML signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#verify_xml_signature Import#verify_xml_signature}
  */
  readonly verifyXmlSignature?: number;
}

export function importAuthSamlIdpToTerraform(struct?: ImportAuthSamlIdpOutputReference | ImportAuthSamlIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite: cdktf.numberToTerraform(struct!.overwrite),
    password: cdktf.stringToTerraform(struct!.password),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    saml_idp_name: cdktf.stringToTerraform(struct!.samlIdpName),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
    verify_xml_signature: cdktf.numberToTerraform(struct!.verifyXmlSignature),
  }
}


export function importAuthSamlIdpToHclTerraform(struct?: ImportAuthSamlIdpOutputReference | ImportAuthSamlIdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite: {
      value: cdktf.numberToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_idp_name: {
      value: cdktf.stringToHclTerraform(struct!.samlIdpName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verify_xml_signature: {
      value: cdktf.numberToHclTerraform(struct!.verifyXmlSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportAuthSamlIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportAuthSamlIdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._samlIdpName !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdpName = this._samlIdpName;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    if (this._verifyXmlSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyXmlSignature = this._verifyXmlSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportAuthSamlIdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overwrite = undefined;
      this._password = undefined;
      this._proxy = undefined;
      this._remoteFile = undefined;
      this._samlIdpName = undefined;
      this._useMgmtPort = undefined;
      this._verifyXmlSignature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overwrite = value.overwrite;
      this._password = value.password;
      this._proxy = value.proxy;
      this._remoteFile = value.remoteFile;
      this._samlIdpName = value.samlIdpName;
      this._useMgmtPort = value.useMgmtPort;
      this._verifyXmlSignature = value.verifyXmlSignature;
    }
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // saml_idp_name - computed: false, optional: true, required: false
  private _samlIdpName?: string; 
  public get samlIdpName() {
    return this.getStringAttribute('saml_idp_name');
  }
  public set samlIdpName(value: string) {
    this._samlIdpName = value;
  }
  public resetSamlIdpName() {
    this._samlIdpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpNameInput() {
    return this._samlIdpName;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // verify_xml_signature - computed: false, optional: true, required: false
  private _verifyXmlSignature?: number; 
  public get verifyXmlSignature() {
    return this.getNumberAttribute('verify_xml_signature');
  }
  public set verifyXmlSignature(value: number) {
    this._verifyXmlSignature = value;
  }
  public resetVerifyXmlSignature() {
    this._verifyXmlSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyXmlSignatureInput() {
    return this._verifyXmlSignature;
  }
}
export interface ImportGeoLocationArchive {
  /**
  * 'GeoLite2-ASN': GeoLite2-ASN CSV Zipped File; 'GeoLite2-City': GeoLite2-City CSV Zipped File; 'GeoLite2-Country': GeoLite2-Country CSV Zipped File;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#geo_location_archive_format Import#geo_location_archive_format}
  */
  readonly geoLocationArchiveFormat?: string;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#password Import#password}
  */
  readonly password?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#proxy Import#proxy}
  */
  readonly proxy?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function importGeoLocationArchiveToTerraform(struct?: ImportGeoLocationArchiveOutputReference | ImportGeoLocationArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location_archive_format: cdktf.stringToTerraform(struct!.geoLocationArchiveFormat),
    password: cdktf.stringToTerraform(struct!.password),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function importGeoLocationArchiveToHclTerraform(struct?: ImportGeoLocationArchiveOutputReference | ImportGeoLocationArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location_archive_format: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationArchiveFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportGeoLocationArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportGeoLocationArchive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocationArchiveFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationArchiveFormat = this._geoLocationArchiveFormat;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportGeoLocationArchive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoLocationArchiveFormat = undefined;
      this._password = undefined;
      this._proxy = undefined;
      this._remoteFile = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoLocationArchiveFormat = value.geoLocationArchiveFormat;
      this._password = value.password;
      this._proxy = value.proxy;
      this._remoteFile = value.remoteFile;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // geo_location_archive_format - computed: false, optional: true, required: false
  private _geoLocationArchiveFormat?: string; 
  public get geoLocationArchiveFormat() {
    return this.getStringAttribute('geo_location_archive_format');
  }
  public set geoLocationArchiveFormat(value: string) {
    this._geoLocationArchiveFormat = value;
  }
  public resetGeoLocationArchiveFormat() {
    this._geoLocationArchiveFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationArchiveFormatInput() {
    return this._geoLocationArchiveFormat;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface ImportHealthExternal {
  /**
  * Describe the Program Function briefly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#description Import#description}
  */
  readonly description?: string;
  /**
  * Specify the Program Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#externalfilename Import#externalfilename}
  */
  readonly externalfilename?: string;
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#overwrite Import#overwrite}
  */
  readonly overwrite?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#password Import#password}
  */
  readonly password?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#proxy Import#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function importHealthExternalToTerraform(struct?: ImportHealthExternalOutputReference | ImportHealthExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    externalfilename: cdktf.stringToTerraform(struct!.externalfilename),
    overwrite: cdktf.numberToTerraform(struct!.overwrite),
    password: cdktf.stringToTerraform(struct!.password),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function importHealthExternalToHclTerraform(struct?: ImportHealthExternalOutputReference | ImportHealthExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    externalfilename: {
      value: cdktf.stringToHclTerraform(struct!.externalfilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.numberToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportHealthExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportHealthExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalfilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalfilename = this._externalfilename;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportHealthExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._externalfilename = undefined;
      this._overwrite = undefined;
      this._password = undefined;
      this._proxy = undefined;
      this._remoteFile = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._externalfilename = value.externalfilename;
      this._overwrite = value.overwrite;
      this._password = value.password;
      this._proxy = value.proxy;
      this._remoteFile = value.remoteFile;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // externalfilename - computed: false, optional: true, required: false
  private _externalfilename?: string; 
  public get externalfilename() {
    return this.getStringAttribute('externalfilename');
  }
  public set externalfilename(value: string) {
    this._externalfilename = value;
  }
  public resetExternalfilename() {
    this._externalfilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalfilenameInput() {
    return this._externalfilename;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface ImportHealthPostfile {
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#overwrite Import#overwrite}
  */
  readonly overwrite?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#password Import#password}
  */
  readonly password?: string;
  /**
  * Specify the File Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#postfilename Import#postfilename}
  */
  readonly postfilename?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#proxy Import#proxy}
  */
  readonly proxy?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function importHealthPostfileToTerraform(struct?: ImportHealthPostfileOutputReference | ImportHealthPostfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite: cdktf.numberToTerraform(struct!.overwrite),
    password: cdktf.stringToTerraform(struct!.password),
    postfilename: cdktf.stringToTerraform(struct!.postfilename),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function importHealthPostfileToHclTerraform(struct?: ImportHealthPostfileOutputReference | ImportHealthPostfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite: {
      value: cdktf.numberToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postfilename: {
      value: cdktf.stringToHclTerraform(struct!.postfilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportHealthPostfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportHealthPostfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._postfilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.postfilename = this._postfilename;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportHealthPostfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overwrite = undefined;
      this._password = undefined;
      this._postfilename = undefined;
      this._proxy = undefined;
      this._remoteFile = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overwrite = value.overwrite;
      this._password = value.password;
      this._postfilename = value.postfilename;
      this._proxy = value.proxy;
      this._remoteFile = value.remoteFile;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // postfilename - computed: false, optional: true, required: false
  private _postfilename?: string; 
  public get postfilename() {
    return this.getStringAttribute('postfilename');
  }
  public set postfilename(value: string) {
    this._postfilename = value;
  }
  public resetPostfilename() {
    this._postfilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postfilenameInput() {
    return this._postfilename;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface ImportNgWafCustomPage {
  /**
  * Custom html file for ng-waf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#custom_page Import#custom_page}
  */
  readonly customPage?: string;
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#overwrite Import#overwrite}
  */
  readonly overwrite?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#password Import#password}
  */
  readonly password?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#proxy Import#proxy}
  */
  readonly proxy?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management interface for reachability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function importNgWafCustomPageToTerraform(struct?: ImportNgWafCustomPageOutputReference | ImportNgWafCustomPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    overwrite: cdktf.numberToTerraform(struct!.overwrite),
    password: cdktf.stringToTerraform(struct!.password),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function importNgWafCustomPageToHclTerraform(struct?: ImportNgWafCustomPageOutputReference | ImportNgWafCustomPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.numberToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportNgWafCustomPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportNgWafCustomPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportNgWafCustomPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customPage = undefined;
      this._overwrite = undefined;
      this._password = undefined;
      this._proxy = undefined;
      this._remoteFile = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customPage = value.customPage;
      this._overwrite = value.overwrite;
      this._password = value.password;
      this._proxy = value.proxy;
      this._remoteFile = value.remoteFile;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface ImportNgWafModule {
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#overwrite Import#overwrite}
  */
  readonly overwrite?: number;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#password Import#password}
  */
  readonly password?: string;
  /**
  * Specific a proxy (format=HOST:PORT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#proxy Import#proxy}
  */
  readonly proxy?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management interface for reachability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function importNgWafModuleToTerraform(struct?: ImportNgWafModuleOutputReference | ImportNgWafModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overwrite: cdktf.numberToTerraform(struct!.overwrite),
    password: cdktf.stringToTerraform(struct!.password),
    proxy: cdktf.stringToTerraform(struct!.proxy),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function importNgWafModuleToHclTerraform(struct?: ImportNgWafModuleOutputReference | ImportNgWafModule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overwrite: {
      value: cdktf.numberToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: cdktf.stringToHclTerraform(struct!.proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportNgWafModuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportNgWafModule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportNgWafModule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overwrite = undefined;
      this._password = undefined;
      this._proxy = undefined;
      this._remoteFile = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overwrite = value.overwrite;
      this._password = value.password;
      this._proxy = value.proxy;
      this._remoteFile = value.remoteFile;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface ImportStore {
  /**
  * Create an import store profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#create Import#create}
  */
  readonly create?: number;
  /**
  * Delete an import store profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#delete Import#delete}
  */
  readonly delete?: number;
  /**
  * profile name to store remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#name Import#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
}

export function importStoreToTerraform(struct?: ImportStoreOutputReference | ImportStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.numberToTerraform(struct!.create),
    delete: cdktf.numberToTerraform(struct!.delete),
    name: cdktf.stringToTerraform(struct!.name),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
  }
}


export function importStoreToHclTerraform(struct?: ImportStoreOutputReference | ImportStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.numberToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._name = undefined;
      this._remoteFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._name = value.name;
      this._remoteFile = value.remoteFile;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: number; 
  public get create() {
    return this.getNumberAttribute('create');
  }
  public set create(value: number) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }
}
export interface ImportToDevice {
  /**
  * Device (Device ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#device Import#device}
  */
  readonly device?: number;
  /**
  * GLM certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#glm_cert Import#glm_cert}
  */
  readonly glmCert?: string;
  /**
  * License File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#glm_license Import#glm_license}
  */
  readonly glmLicense?: string;
  /**
  * Overwrite existing file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#overwrite Import#overwrite}
  */
  readonly overwrite?: number;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#remote_file Import#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#use_mgmt_port Import#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * License file to enable web-category feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#web_category_license Import#web_category_license}
  */
  readonly webCategoryLicense?: string;
}

export function importToDeviceToTerraform(struct?: ImportToDeviceOutputReference | ImportToDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.numberToTerraform(struct!.device),
    glm_cert: cdktf.stringToTerraform(struct!.glmCert),
    glm_license: cdktf.stringToTerraform(struct!.glmLicense),
    overwrite: cdktf.numberToTerraform(struct!.overwrite),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
    web_category_license: cdktf.stringToTerraform(struct!.webCategoryLicense),
  }
}


export function importToDeviceToHclTerraform(struct?: ImportToDeviceOutputReference | ImportToDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.numberToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glm_cert: {
      value: cdktf.stringToHclTerraform(struct!.glmCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glm_license: {
      value: cdktf.stringToHclTerraform(struct!.glmLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.numberToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_file: {
      value: cdktf.stringToHclTerraform(struct!.remoteFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_category_license: {
      value: cdktf.stringToHclTerraform(struct!.webCategoryLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImportToDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImportToDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._glmCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.glmCert = this._glmCert;
    }
    if (this._glmLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.glmLicense = this._glmLicense;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._remoteFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteFile = this._remoteFile;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    if (this._webCategoryLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCategoryLicense = this._webCategoryLicense;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImportToDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._glmCert = undefined;
      this._glmLicense = undefined;
      this._overwrite = undefined;
      this._remoteFile = undefined;
      this._useMgmtPort = undefined;
      this._webCategoryLicense = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._glmCert = value.glmCert;
      this._glmLicense = value.glmLicense;
      this._overwrite = value.overwrite;
      this._remoteFile = value.remoteFile;
      this._useMgmtPort = value.useMgmtPort;
      this._webCategoryLicense = value.webCategoryLicense;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // glm_cert - computed: false, optional: true, required: false
  private _glmCert?: string; 
  public get glmCert() {
    return this.getStringAttribute('glm_cert');
  }
  public set glmCert(value: string) {
    this._glmCert = value;
  }
  public resetGlmCert() {
    this._glmCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmCertInput() {
    return this._glmCert;
  }

  // glm_license - computed: false, optional: true, required: false
  private _glmLicense?: string; 
  public get glmLicense() {
    return this.getStringAttribute('glm_license');
  }
  public set glmLicense(value: string) {
    this._glmLicense = value;
  }
  public resetGlmLicense() {
    this._glmLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmLicenseInput() {
    return this._glmLicense;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // web_category_license - computed: false, optional: true, required: false
  private _webCategoryLicense?: string; 
  public get webCategoryLicense() {
    return this.getStringAttribute('web_category_license');
  }
  public set webCategoryLicense(value: string) {
    this._webCategoryLicense = value;
  }
  public resetWebCategoryLicense() {
    this._webCategoryLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryLicenseInput() {
    return this._webCategoryLicense;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import thunder_import}
*/
export class Import extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Import resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Import to import
  * @param importFromId The id of the existing Import that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Import to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/import thunder_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_import',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aflex = config.aflex;
    this._authJwks = config.authJwks;
    this._authPortal = config.authPortal;
    this._authPortalImage = config.authPortalImage;
    this._background = config.background;
    this._biosFile = config.biosFile;
    this._bwList = config.bwList;
    this._caCert = config.caCert;
    this._certificateType = config.certificateType;
    this._classList = config.classList;
    this._classListConvert = config.classListConvert;
    this._classListType = config.classListType;
    this._cloudConfig = config.cloudConfig;
    this._cloudCreds = config.cloudCreds;
    this._csrGenerate = config.csrGenerate;
    this._ddosScript = config.ddosScript;
    this._digest = config.digest;
    this._dnssecDnskey = config.dnssecDnskey;
    this._dnssecDs = config.dnssecDs;
    this._domainList = config.domainList;
    this._geoLocation = config.geoLocation;
    this._glmCert = config.glmCert;
    this._glmLicense = config.glmLicense;
    this._id = config.id;
    this._ipMapList = config.ipMapList;
    this._localUriFile = config.localUriFile;
    this._lw4O6 = config.lw4O6;
    this._overwrite = config.overwrite;
    this._password = config.password;
    this._pfxPassword = config.pfxPassword;
    this._proxy = config.proxy;
    this._remoteFile = config.remoteFile;
    this._remoteFileZoneTransfer = config.remoteFileZoneTransfer;
    this._rpz = config.rpz;
    this._secured = config.secured;
    this._sslCert = config.sslCert;
    this._sslCertKey = config.sslCertKey;
    this._sslCrl = config.sslCrl;
    this._sslKey = config.sslKey;
    this._storeName = config.storeName;
    this._terminal = config.terminal;
    this._thalesKmdata = config.thalesKmdata;
    this._thalesSecworld = config.thalesSecworld;
    this._tsig = config.tsig;
    this._usbLicense = config.usbLicense;
    this._useMgmtPort = config.useMgmtPort;
    this._useSshKey = config.useSshKey;
    this._userTag = config.userTag;
    this._webCategoryLicense = config.webCategoryLicense;
    this._xmlSchema = config.xmlSchema;
    this._zoneTransfer = config.zoneTransfer;
    this._authSamlIdp.internalValue = config.authSamlIdp;
    this._geoLocationArchive.internalValue = config.geoLocationArchive;
    this._healthExternal.internalValue = config.healthExternal;
    this._healthPostfile.internalValue = config.healthPostfile;
    this._ngWafCustomPage.internalValue = config.ngWafCustomPage;
    this._ngWafModule.internalValue = config.ngWafModule;
    this._store.internalValue = config.store;
    this._toDevice.internalValue = config.toDevice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aflex - computed: false, optional: true, required: false
  private _aflex?: string; 
  public get aflex() {
    return this.getStringAttribute('aflex');
  }
  public set aflex(value: string) {
    this._aflex = value;
  }
  public resetAflex() {
    this._aflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexInput() {
    return this._aflex;
  }

  // auth_jwks - computed: false, optional: true, required: false
  private _authJwks?: string; 
  public get authJwks() {
    return this.getStringAttribute('auth_jwks');
  }
  public set authJwks(value: string) {
    this._authJwks = value;
  }
  public resetAuthJwks() {
    this._authJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authJwksInput() {
    return this._authJwks;
  }

  // auth_portal - computed: false, optional: true, required: false
  private _authPortal?: string; 
  public get authPortal() {
    return this.getStringAttribute('auth_portal');
  }
  public set authPortal(value: string) {
    this._authPortal = value;
  }
  public resetAuthPortal() {
    this._authPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalInput() {
    return this._authPortal;
  }

  // auth_portal_image - computed: false, optional: true, required: false
  private _authPortalImage?: string; 
  public get authPortalImage() {
    return this.getStringAttribute('auth_portal_image');
  }
  public set authPortalImage(value: string) {
    this._authPortalImage = value;
  }
  public resetAuthPortalImage() {
    this._authPortalImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalImageInput() {
    return this._authPortalImage;
  }

  // background - computed: false, optional: true, required: false
  private _background?: number; 
  public get background() {
    return this.getNumberAttribute('background');
  }
  public set background(value: number) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // bios_file - computed: false, optional: true, required: false
  private _biosFile?: string; 
  public get biosFile() {
    return this.getStringAttribute('bios_file');
  }
  public set biosFile(value: string) {
    this._biosFile = value;
  }
  public resetBiosFile() {
    this._biosFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosFileInput() {
    return this._biosFile;
  }

  // bw_list - computed: false, optional: true, required: false
  private _bwList?: string; 
  public get bwList() {
    return this.getStringAttribute('bw_list');
  }
  public set bwList(value: string) {
    this._bwList = value;
  }
  public resetBwList() {
    this._bwList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwListInput() {
    return this._bwList;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // class_list_convert - computed: false, optional: true, required: false
  private _classListConvert?: string; 
  public get classListConvert() {
    return this.getStringAttribute('class_list_convert');
  }
  public set classListConvert(value: string) {
    this._classListConvert = value;
  }
  public resetClassListConvert() {
    this._classListConvert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListConvertInput() {
    return this._classListConvert;
  }

  // class_list_type - computed: false, optional: true, required: false
  private _classListType?: string; 
  public get classListType() {
    return this.getStringAttribute('class_list_type');
  }
  public set classListType(value: string) {
    this._classListType = value;
  }
  public resetClassListType() {
    this._classListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListTypeInput() {
    return this._classListType;
  }

  // cloud_config - computed: false, optional: true, required: false
  private _cloudConfig?: string; 
  public get cloudConfig() {
    return this.getStringAttribute('cloud_config');
  }
  public set cloudConfig(value: string) {
    this._cloudConfig = value;
  }
  public resetCloudConfig() {
    this._cloudConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig;
  }

  // cloud_creds - computed: false, optional: true, required: false
  private _cloudCreds?: string; 
  public get cloudCreds() {
    return this.getStringAttribute('cloud_creds');
  }
  public set cloudCreds(value: string) {
    this._cloudCreds = value;
  }
  public resetCloudCreds() {
    this._cloudCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredsInput() {
    return this._cloudCreds;
  }

  // csr_generate - computed: false, optional: true, required: false
  private _csrGenerate?: number; 
  public get csrGenerate() {
    return this.getNumberAttribute('csr_generate');
  }
  public set csrGenerate(value: number) {
    this._csrGenerate = value;
  }
  public resetCsrGenerate() {
    this._csrGenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrGenerateInput() {
    return this._csrGenerate;
  }

  // ddos_script - computed: false, optional: true, required: false
  private _ddosScript?: string; 
  public get ddosScript() {
    return this.getStringAttribute('ddos_script');
  }
  public set ddosScript(value: string) {
    this._ddosScript = value;
  }
  public resetDdosScript() {
    this._ddosScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosScriptInput() {
    return this._ddosScript;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // dnssec_dnskey - computed: false, optional: true, required: false
  private _dnssecDnskey?: string; 
  public get dnssecDnskey() {
    return this.getStringAttribute('dnssec_dnskey');
  }
  public set dnssecDnskey(value: string) {
    this._dnssecDnskey = value;
  }
  public resetDnssecDnskey() {
    this._dnssecDnskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecDnskeyInput() {
    return this._dnssecDnskey;
  }

  // dnssec_ds - computed: false, optional: true, required: false
  private _dnssecDs?: string; 
  public get dnssecDs() {
    return this.getStringAttribute('dnssec_ds');
  }
  public set dnssecDs(value: string) {
    this._dnssecDs = value;
  }
  public resetDnssecDs() {
    this._dnssecDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecDsInput() {
    return this._dnssecDs;
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList?: string; 
  public get domainList() {
    return this.getStringAttribute('domain_list');
  }
  public set domainList(value: string) {
    this._domainList = value;
  }
  public resetDomainList() {
    this._domainList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList;
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation?: string; 
  public get geoLocation() {
    return this.getStringAttribute('geo_location');
  }
  public set geoLocation(value: string) {
    this._geoLocation = value;
  }
  public resetGeoLocation() {
    this._geoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation;
  }

  // glm_cert - computed: false, optional: true, required: false
  private _glmCert?: string; 
  public get glmCert() {
    return this.getStringAttribute('glm_cert');
  }
  public set glmCert(value: string) {
    this._glmCert = value;
  }
  public resetGlmCert() {
    this._glmCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmCertInput() {
    return this._glmCert;
  }

  // glm_license - computed: false, optional: true, required: false
  private _glmLicense?: string; 
  public get glmLicense() {
    return this.getStringAttribute('glm_license');
  }
  public set glmLicense(value: string) {
    this._glmLicense = value;
  }
  public resetGlmLicense() {
    this._glmLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmLicenseInput() {
    return this._glmLicense;
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

  // ip_map_list - computed: false, optional: true, required: false
  private _ipMapList?: string; 
  public get ipMapList() {
    return this.getStringAttribute('ip_map_list');
  }
  public set ipMapList(value: string) {
    this._ipMapList = value;
  }
  public resetIpMapList() {
    this._ipMapList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMapListInput() {
    return this._ipMapList;
  }

  // local_uri_file - computed: false, optional: true, required: false
  private _localUriFile?: string; 
  public get localUriFile() {
    return this.getStringAttribute('local_uri_file');
  }
  public set localUriFile(value: string) {
    this._localUriFile = value;
  }
  public resetLocalUriFile() {
    this._localUriFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUriFileInput() {
    return this._localUriFile;
  }

  // lw_4o6 - computed: false, optional: true, required: false
  private _lw4O6?: string; 
  public get lw4O6() {
    return this.getStringAttribute('lw_4o6');
  }
  public set lw4O6(value: string) {
    this._lw4O6 = value;
  }
  public resetLw4O6() {
    this._lw4O6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6Input() {
    return this._lw4O6;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: number; 
  public get overwrite() {
    return this.getNumberAttribute('overwrite');
  }
  public set overwrite(value: number) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pfx_password - computed: false, optional: true, required: false
  private _pfxPassword?: string; 
  public get pfxPassword() {
    return this.getStringAttribute('pfx_password');
  }
  public set pfxPassword(value: string) {
    this._pfxPassword = value;
  }
  public resetPfxPassword() {
    this._pfxPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordInput() {
    return this._pfxPassword;
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

  // remote_file - computed: false, optional: true, required: false
  private _remoteFile?: string; 
  public get remoteFile() {
    return this.getStringAttribute('remote_file');
  }
  public set remoteFile(value: string) {
    this._remoteFile = value;
  }
  public resetRemoteFile() {
    this._remoteFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileInput() {
    return this._remoteFile;
  }

  // remote_file_zone_transfer - computed: false, optional: true, required: false
  private _remoteFileZoneTransfer?: string; 
  public get remoteFileZoneTransfer() {
    return this.getStringAttribute('remote_file_zone_transfer');
  }
  public set remoteFileZoneTransfer(value: string) {
    this._remoteFileZoneTransfer = value;
  }
  public resetRemoteFileZoneTransfer() {
    this._remoteFileZoneTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileZoneTransferInput() {
    return this._remoteFileZoneTransfer;
  }

  // rpz - computed: false, optional: true, required: false
  private _rpz?: string; 
  public get rpz() {
    return this.getStringAttribute('rpz');
  }
  public set rpz(value: string) {
    this._rpz = value;
  }
  public resetRpz() {
    this._rpz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzInput() {
    return this._rpz;
  }

  // secured - computed: false, optional: true, required: false
  private _secured?: number; 
  public get secured() {
    return this.getNumberAttribute('secured');
  }
  public set secured(value: number) {
    this._secured = value;
  }
  public resetSecured() {
    this._secured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securedInput() {
    return this._secured;
  }

  // ssl_cert - computed: false, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_cert_key - computed: false, optional: true, required: false
  private _sslCertKey?: string; 
  public get sslCertKey() {
    return this.getStringAttribute('ssl_cert_key');
  }
  public set sslCertKey(value: string) {
    this._sslCertKey = value;
  }
  public resetSslCertKey() {
    this._sslCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertKeyInput() {
    return this._sslCertKey;
  }

  // ssl_crl - computed: false, optional: true, required: false
  private _sslCrl?: string; 
  public get sslCrl() {
    return this.getStringAttribute('ssl_crl');
  }
  public set sslCrl(value: string) {
    this._sslCrl = value;
  }
  public resetSslCrl() {
    this._sslCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCrlInput() {
    return this._sslCrl;
  }

  // ssl_key - computed: false, optional: true, required: false
  private _sslKey?: string; 
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }
  public set sslKey(value: string) {
    this._sslKey = value;
  }
  public resetSslKey() {
    this._sslKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey;
  }

  // store_name - computed: false, optional: true, required: false
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  public resetStoreName() {
    this._storeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: number; 
  public get terminal() {
    return this.getNumberAttribute('terminal');
  }
  public set terminal(value: number) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // thales_kmdata - computed: false, optional: true, required: false
  private _thalesKmdata?: string; 
  public get thalesKmdata() {
    return this.getStringAttribute('thales_kmdata');
  }
  public set thalesKmdata(value: string) {
    this._thalesKmdata = value;
  }
  public resetThalesKmdata() {
    this._thalesKmdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thalesKmdataInput() {
    return this._thalesKmdata;
  }

  // thales_secworld - computed: false, optional: true, required: false
  private _thalesSecworld?: string; 
  public get thalesSecworld() {
    return this.getStringAttribute('thales_secworld');
  }
  public set thalesSecworld(value: string) {
    this._thalesSecworld = value;
  }
  public resetThalesSecworld() {
    this._thalesSecworld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thalesSecworldInput() {
    return this._thalesSecworld;
  }

  // tsig - computed: false, optional: true, required: false
  private _tsig?: string; 
  public get tsig() {
    return this.getStringAttribute('tsig');
  }
  public set tsig(value: string) {
    this._tsig = value;
  }
  public resetTsig() {
    this._tsig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigInput() {
    return this._tsig;
  }

  // usb_license - computed: false, optional: true, required: false
  private _usbLicense?: string; 
  public get usbLicense() {
    return this.getStringAttribute('usb_license');
  }
  public set usbLicense(value: string) {
    this._usbLicense = value;
  }
  public resetUsbLicense() {
    this._usbLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbLicenseInput() {
    return this._usbLicense;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // use_ssh_key - computed: false, optional: true, required: false
  private _useSshKey?: string; 
  public get useSshKey() {
    return this.getStringAttribute('use_ssh_key');
  }
  public set useSshKey(value: string) {
    this._useSshKey = value;
  }
  public resetUseSshKey() {
    this._useSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSshKeyInput() {
    return this._useSshKey;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // web_category_license - computed: false, optional: true, required: false
  private _webCategoryLicense?: string; 
  public get webCategoryLicense() {
    return this.getStringAttribute('web_category_license');
  }
  public set webCategoryLicense(value: string) {
    this._webCategoryLicense = value;
  }
  public resetWebCategoryLicense() {
    this._webCategoryLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryLicenseInput() {
    return this._webCategoryLicense;
  }

  // xml_schema - computed: false, optional: true, required: false
  private _xmlSchema?: string; 
  public get xmlSchema() {
    return this.getStringAttribute('xml_schema');
  }
  public set xmlSchema(value: string) {
    this._xmlSchema = value;
  }
  public resetXmlSchema() {
    this._xmlSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSchemaInput() {
    return this._xmlSchema;
  }

  // zone_transfer - computed: false, optional: true, required: false
  private _zoneTransfer?: string; 
  public get zoneTransfer() {
    return this.getStringAttribute('zone_transfer');
  }
  public set zoneTransfer(value: string) {
    this._zoneTransfer = value;
  }
  public resetZoneTransfer() {
    this._zoneTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferInput() {
    return this._zoneTransfer;
  }

  // auth_saml_idp - computed: false, optional: true, required: false
  private _authSamlIdp = new ImportAuthSamlIdpOutputReference(this, "auth_saml_idp");
  public get authSamlIdp() {
    return this._authSamlIdp;
  }
  public putAuthSamlIdp(value: ImportAuthSamlIdp) {
    this._authSamlIdp.internalValue = value;
  }
  public resetAuthSamlIdp() {
    this._authSamlIdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSamlIdpInput() {
    return this._authSamlIdp.internalValue;
  }

  // geo_location_archive - computed: false, optional: true, required: false
  private _geoLocationArchive = new ImportGeoLocationArchiveOutputReference(this, "geo_location_archive");
  public get geoLocationArchive() {
    return this._geoLocationArchive;
  }
  public putGeoLocationArchive(value: ImportGeoLocationArchive) {
    this._geoLocationArchive.internalValue = value;
  }
  public resetGeoLocationArchive() {
    this._geoLocationArchive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationArchiveInput() {
    return this._geoLocationArchive.internalValue;
  }

  // health_external - computed: false, optional: true, required: false
  private _healthExternal = new ImportHealthExternalOutputReference(this, "health_external");
  public get healthExternal() {
    return this._healthExternal;
  }
  public putHealthExternal(value: ImportHealthExternal) {
    this._healthExternal.internalValue = value;
  }
  public resetHealthExternal() {
    this._healthExternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthExternalInput() {
    return this._healthExternal.internalValue;
  }

  // health_postfile - computed: false, optional: true, required: false
  private _healthPostfile = new ImportHealthPostfileOutputReference(this, "health_postfile");
  public get healthPostfile() {
    return this._healthPostfile;
  }
  public putHealthPostfile(value: ImportHealthPostfile) {
    this._healthPostfile.internalValue = value;
  }
  public resetHealthPostfile() {
    this._healthPostfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPostfileInput() {
    return this._healthPostfile.internalValue;
  }

  // ng_waf_custom_page - computed: false, optional: true, required: false
  private _ngWafCustomPage = new ImportNgWafCustomPageOutputReference(this, "ng_waf_custom_page");
  public get ngWafCustomPage() {
    return this._ngWafCustomPage;
  }
  public putNgWafCustomPage(value: ImportNgWafCustomPage) {
    this._ngWafCustomPage.internalValue = value;
  }
  public resetNgWafCustomPage() {
    this._ngWafCustomPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngWafCustomPageInput() {
    return this._ngWafCustomPage.internalValue;
  }

  // ng_waf_module - computed: false, optional: true, required: false
  private _ngWafModule = new ImportNgWafModuleOutputReference(this, "ng_waf_module");
  public get ngWafModule() {
    return this._ngWafModule;
  }
  public putNgWafModule(value: ImportNgWafModule) {
    this._ngWafModule.internalValue = value;
  }
  public resetNgWafModule() {
    this._ngWafModule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngWafModuleInput() {
    return this._ngWafModule.internalValue;
  }

  // store - computed: false, optional: true, required: false
  private _store = new ImportStoreOutputReference(this, "store");
  public get store() {
    return this._store;
  }
  public putStore(value: ImportStore) {
    this._store.internalValue = value;
  }
  public resetStore() {
    this._store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store.internalValue;
  }

  // to_device - computed: false, optional: true, required: false
  private _toDevice = new ImportToDeviceOutputReference(this, "to_device");
  public get toDevice() {
    return this._toDevice;
  }
  public putToDevice(value: ImportToDevice) {
    this._toDevice.internalValue = value;
  }
  public resetToDevice() {
    this._toDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toDeviceInput() {
    return this._toDevice.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aflex: cdktf.stringToTerraform(this._aflex),
      auth_jwks: cdktf.stringToTerraform(this._authJwks),
      auth_portal: cdktf.stringToTerraform(this._authPortal),
      auth_portal_image: cdktf.stringToTerraform(this._authPortalImage),
      background: cdktf.numberToTerraform(this._background),
      bios_file: cdktf.stringToTerraform(this._biosFile),
      bw_list: cdktf.stringToTerraform(this._bwList),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      class_list: cdktf.stringToTerraform(this._classList),
      class_list_convert: cdktf.stringToTerraform(this._classListConvert),
      class_list_type: cdktf.stringToTerraform(this._classListType),
      cloud_config: cdktf.stringToTerraform(this._cloudConfig),
      cloud_creds: cdktf.stringToTerraform(this._cloudCreds),
      csr_generate: cdktf.numberToTerraform(this._csrGenerate),
      ddos_script: cdktf.stringToTerraform(this._ddosScript),
      digest: cdktf.stringToTerraform(this._digest),
      dnssec_dnskey: cdktf.stringToTerraform(this._dnssecDnskey),
      dnssec_ds: cdktf.stringToTerraform(this._dnssecDs),
      domain_list: cdktf.stringToTerraform(this._domainList),
      geo_location: cdktf.stringToTerraform(this._geoLocation),
      glm_cert: cdktf.stringToTerraform(this._glmCert),
      glm_license: cdktf.stringToTerraform(this._glmLicense),
      id: cdktf.stringToTerraform(this._id),
      ip_map_list: cdktf.stringToTerraform(this._ipMapList),
      local_uri_file: cdktf.stringToTerraform(this._localUriFile),
      lw_4o6: cdktf.stringToTerraform(this._lw4O6),
      overwrite: cdktf.numberToTerraform(this._overwrite),
      password: cdktf.stringToTerraform(this._password),
      pfx_password: cdktf.stringToTerraform(this._pfxPassword),
      proxy: cdktf.stringToTerraform(this._proxy),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      remote_file_zone_transfer: cdktf.stringToTerraform(this._remoteFileZoneTransfer),
      rpz: cdktf.stringToTerraform(this._rpz),
      secured: cdktf.numberToTerraform(this._secured),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      ssl_cert_key: cdktf.stringToTerraform(this._sslCertKey),
      ssl_crl: cdktf.stringToTerraform(this._sslCrl),
      ssl_key: cdktf.stringToTerraform(this._sslKey),
      store_name: cdktf.stringToTerraform(this._storeName),
      terminal: cdktf.numberToTerraform(this._terminal),
      thales_kmdata: cdktf.stringToTerraform(this._thalesKmdata),
      thales_secworld: cdktf.stringToTerraform(this._thalesSecworld),
      tsig: cdktf.stringToTerraform(this._tsig),
      usb_license: cdktf.stringToTerraform(this._usbLicense),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      use_ssh_key: cdktf.stringToTerraform(this._useSshKey),
      user_tag: cdktf.stringToTerraform(this._userTag),
      web_category_license: cdktf.stringToTerraform(this._webCategoryLicense),
      xml_schema: cdktf.stringToTerraform(this._xmlSchema),
      zone_transfer: cdktf.stringToTerraform(this._zoneTransfer),
      auth_saml_idp: importAuthSamlIdpToTerraform(this._authSamlIdp.internalValue),
      geo_location_archive: importGeoLocationArchiveToTerraform(this._geoLocationArchive.internalValue),
      health_external: importHealthExternalToTerraform(this._healthExternal.internalValue),
      health_postfile: importHealthPostfileToTerraform(this._healthPostfile.internalValue),
      ng_waf_custom_page: importNgWafCustomPageToTerraform(this._ngWafCustomPage.internalValue),
      ng_waf_module: importNgWafModuleToTerraform(this._ngWafModule.internalValue),
      store: importStoreToTerraform(this._store.internalValue),
      to_device: importToDeviceToTerraform(this._toDevice.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aflex: {
        value: cdktf.stringToHclTerraform(this._aflex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_jwks: {
        value: cdktf.stringToHclTerraform(this._authJwks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_portal: {
        value: cdktf.stringToHclTerraform(this._authPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_portal_image: {
        value: cdktf.stringToHclTerraform(this._authPortalImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      background: {
        value: cdktf.numberToHclTerraform(this._background),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bios_file: {
        value: cdktf.stringToHclTerraform(this._biosFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bw_list: {
        value: cdktf.stringToHclTerraform(this._bwList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_list: {
        value: cdktf.stringToHclTerraform(this._classList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_list_convert: {
        value: cdktf.stringToHclTerraform(this._classListConvert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_list_type: {
        value: cdktf.stringToHclTerraform(this._classListType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_config: {
        value: cdktf.stringToHclTerraform(this._cloudConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_creds: {
        value: cdktf.stringToHclTerraform(this._cloudCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_generate: {
        value: cdktf.numberToHclTerraform(this._csrGenerate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_script: {
        value: cdktf.stringToHclTerraform(this._ddosScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_dnskey: {
        value: cdktf.stringToHclTerraform(this._dnssecDnskey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_ds: {
        value: cdktf.stringToHclTerraform(this._dnssecDs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_list: {
        value: cdktf.stringToHclTerraform(this._domainList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_location: {
        value: cdktf.stringToHclTerraform(this._geoLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glm_cert: {
        value: cdktf.stringToHclTerraform(this._glmCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      glm_license: {
        value: cdktf.stringToHclTerraform(this._glmLicense),
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
      ip_map_list: {
        value: cdktf.stringToHclTerraform(this._ipMapList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_uri_file: {
        value: cdktf.stringToHclTerraform(this._localUriFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lw_4o6: {
        value: cdktf.stringToHclTerraform(this._lw4O6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.numberToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfx_password: {
        value: cdktf.stringToHclTerraform(this._pfxPassword),
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
      remote_file: {
        value: cdktf.stringToHclTerraform(this._remoteFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_file_zone_transfer: {
        value: cdktf.stringToHclTerraform(this._remoteFileZoneTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpz: {
        value: cdktf.stringToHclTerraform(this._rpz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secured: {
        value: cdktf.numberToHclTerraform(this._secured),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_cert: {
        value: cdktf.stringToHclTerraform(this._sslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_cert_key: {
        value: cdktf.stringToHclTerraform(this._sslCertKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_crl: {
        value: cdktf.stringToHclTerraform(this._sslCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_key: {
        value: cdktf.stringToHclTerraform(this._sslKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_name: {
        value: cdktf.stringToHclTerraform(this._storeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminal: {
        value: cdktf.numberToHclTerraform(this._terminal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      thales_kmdata: {
        value: cdktf.stringToHclTerraform(this._thalesKmdata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thales_secworld: {
        value: cdktf.stringToHclTerraform(this._thalesSecworld),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tsig: {
        value: cdktf.stringToHclTerraform(this._tsig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usb_license: {
        value: cdktf.stringToHclTerraform(this._usbLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_ssh_key: {
        value: cdktf.stringToHclTerraform(this._useSshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_category_license: {
        value: cdktf.stringToHclTerraform(this._webCategoryLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xml_schema: {
        value: cdktf.stringToHclTerraform(this._xmlSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_transfer: {
        value: cdktf.stringToHclTerraform(this._zoneTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_saml_idp: {
        value: importAuthSamlIdpToHclTerraform(this._authSamlIdp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportAuthSamlIdpList",
      },
      geo_location_archive: {
        value: importGeoLocationArchiveToHclTerraform(this._geoLocationArchive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportGeoLocationArchiveList",
      },
      health_external: {
        value: importHealthExternalToHclTerraform(this._healthExternal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportHealthExternalList",
      },
      health_postfile: {
        value: importHealthPostfileToHclTerraform(this._healthPostfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportHealthPostfileList",
      },
      ng_waf_custom_page: {
        value: importNgWafCustomPageToHclTerraform(this._ngWafCustomPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportNgWafCustomPageList",
      },
      ng_waf_module: {
        value: importNgWafModuleToHclTerraform(this._ngWafModule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportNgWafModuleList",
      },
      store: {
        value: importStoreToHclTerraform(this._store.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportStoreList",
      },
      to_device: {
        value: importToDeviceToHclTerraform(this._toDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImportToDeviceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
