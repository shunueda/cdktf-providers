// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * aFleX Script Source File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#aflex Export#aflex}
  */
  readonly aflex?: string;
  /**
  * Json web key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#auth_jwks Export#auth_jwks}
  */
  readonly authJwks?: string;
  /**
  * Portal file for http authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#auth_portal Export#auth_portal}
  */
  readonly authPortal?: string;
  /**
  * Image file for default portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#auth_portal_image Export#auth_portal_image}
  */
  readonly authPortalImage?: string;
  /**
  * AX Debug Packet File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#axdebug Export#axdebug}
  */
  readonly axdebug?: string;
  /**
  * Black white List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#bw_list Export#bw_list}
  */
  readonly bwList?: string;
  /**
  * CA Cert File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#ca_cert Export#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Capture-config pcapng file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#capture_config Export#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Capture-config pcapng real-time file (For GUI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#capture_config_realtime Export#capture_config_realtime}
  */
  readonly captureConfigRealtime?: string;
  /**
  * Class List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#class_list Export#class_list}
  */
  readonly classList?: string;
  /**
  * Certificate Signing Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#csr Export#csr}
  */
  readonly csr?: string;
  /**
  * Debug Monitor Output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#debug_monitor Export#debug_monitor}
  */
  readonly debugMonitor?: string;
  /**
  * Debug-Traffic-Capture pcapng file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#debug_traffic_capture Export#debug_traffic_capture}
  */
  readonly debugTrafficCapture?: string;
  /**
  * Debug-Traffic-Capture pcapng file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#debug_traffic_capture_chassis Export#debug_traffic_capture_chassis}
  */
  readonly debugTrafficCaptureChassis?: string;
  /**
  * specify slot id in chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#debug_traffic_capture_chassis_slot Export#debug_traffic_capture_chassis_slot}
  */
  readonly debugTrafficCaptureChassisSlot?: number;
  /**
  * DNSSEC DNSKEY(KSK) file for child zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#dnssec_dnskey Export#dnssec_dnskey}
  */
  readonly dnssecDnskey?: string;
  /**
  * DNSSEC DS file for child zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#dnssec_ds Export#dnssec_ds}
  */
  readonly dnssecDs?: string;
  /**
  * Domain List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#domain_list Export#domain_list}
  */
  readonly domainList?: string;
  /**
  * Export the External Program from the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#externalfilename Export#externalfilename}
  */
  readonly externalfilename?: string;
  /**
  * Fixed NAT Port Mapping File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#fixed_nat Export#fixed_nat}
  */
  readonly fixedNat?: string;
  /**
  * Fixed NAT Port Mapping Archive File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#fixed_nat_archive Export#fixed_nat_archive}
  */
  readonly fixedNatArchive?: string;
  /**
  * Geo-location CSV File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#geo_location Export#geo_location}
  */
  readonly geoLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#id Export#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Map List File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#ip_map_list Export#ip_map_list}
  */
  readonly ipMapList?: string;
  /**
  * IPsec error dump File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#ipsec_error_dump Export#ipsec_error_dump}
  */
  readonly ipsecErrorDump?: string;
  /**
  * Local URI files for http response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#local_uri_file Export#local_uri_file}
  */
  readonly localUriFile?: string;
  /**
  * LW-4over6 Binding Table File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#lw_4o6 Export#lw_4o6}
  */
  readonly lw4O6?: string;
  /**
  * LW-4over6 Binding Table Validation Log File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#lw_4o6_binding_table_validation_log Export#lw_4o6_binding_table_validation_log}
  */
  readonly lw4O6BindingTableValidationLog?: string;
  /**
  * Export the merged pcap file when there are multiple Export sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#merged_pcap Export#merged_pcap}
  */
  readonly mergedPcap?: number;
  /**
  * Enter Mon entity debug file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#mon_entity_debug_file Export#mon_entity_debug_file}
  */
  readonly monEntityDebugFile?: string;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#password Export#password}
  */
  readonly password?: string;
  /**
  * Export the per-cpu files along with the merged pcap file in .tgz format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#per_cpu Export#per_cpu}
  */
  readonly perCpu?: number;
  /**
  * Specify number of latest packets to export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#pkt_count Export#pkt_count}
  */
  readonly pktCount?: number;
  /**
  * Enter Pktcapture file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#pktcapture_file Export#pktcapture_file}
  */
  readonly pktcaptureFile?: string;
  /**
  * Startup-config Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#profile Export#profile}
  */
  readonly profile?: string;
  /**
  * profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#remote_file Export#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Response Policy Zone File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#rpz Export#rpz}
  */
  readonly rpz?: string;
  /**
  * Running Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#running_config Export#running_config}
  */
  readonly runningConfig?: number;
  /**
  * SAML metadata of identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#saml_idp_name Export#saml_idp_name}
  */
  readonly samlIdpName?: string;
  /**
  * SSL Cert File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#ssl_cert Export#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * Local SSL Key/Certificate file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#ssl_cert_key Export#ssl_cert_key}
  */
  readonly sslCertKey?: string;
  /**
  * SSL Crl File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#ssl_crl Export#ssl_crl}
  */
  readonly sslCrl?: string;
  /**
  * SSL Key File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#ssl_key Export#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Startup Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#startup_config Export#startup_config}
  */
  readonly startupConfig?: number;
  /**
  * check export task status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#status_check Export#status_check}
  */
  readonly statusCheck?: number;
  /**
  * Export store name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#store_name Export#store_name}
  */
  readonly storeName?: string;
  /**
  * Enter "messages" as the default syslog file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#syslog Export#syslog}
  */
  readonly syslog?: string;
  /**
  * Export the merged pcap in .tgz format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#tgz Export#tgz}
  */
  readonly tgz?: number;
  /**
  * Thales Kmdata files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#thales_kmdata Export#thales_kmdata}
  */
  readonly thalesKmdata?: string;
  /**
  * Thales security world files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#thales_secworld Export#thales_secworld}
  */
  readonly thalesSecworld?: string;
  /**
  * Transaction SIGnatures Key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#tsig Export#tsig}
  */
  readonly tsig?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#use_mgmt_port Export#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Export Visibility module related files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#visibility Export#visibility}
  */
  readonly visibility?: number;
  /**
  * XML-Schema File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#xml_schema Export#xml_schema}
  */
  readonly xmlSchema?: string;
  /**
  * geo_location_archive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#geo_location_archive Export#geo_location_archive}
  */
  readonly geoLocationArchive?: ExportGeoLocationArchive;
  /**
  * store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#store Export#store}
  */
  readonly store?: ExportStore;
}
export interface ExportGeoLocationArchive {
  /**
  * 'GeoLite2-ASN-Archive': GeoLite2-ASN CSV Zipped File; 'GeoLite2-City-Archive': GeoLite2-City CSV Zipped File; 'GeoLite2-Country-Archive': GeoLite2-Country CSV Zipped File;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#geo_location_archive_name Export#geo_location_archive_name}
  */
  readonly geoLocationArchiveName?: string;
  /**
  * password for the remote site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#password Export#password}
  */
  readonly password?: string;
  /**
  * Profile name for remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#remote_file Export#remote_file}
  */
  readonly remoteFile?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#use_mgmt_port Export#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function exportGeoLocationArchiveToTerraform(struct?: ExportGeoLocationArchiveOutputReference | ExportGeoLocationArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location_archive_name: cdktf.stringToTerraform(struct!.geoLocationArchiveName),
    password: cdktf.stringToTerraform(struct!.password),
    remote_file: cdktf.stringToTerraform(struct!.remoteFile),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function exportGeoLocationArchiveToHclTerraform(struct?: ExportGeoLocationArchiveOutputReference | ExportGeoLocationArchive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location_archive_name: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationArchiveName),
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

export class ExportGeoLocationArchiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExportGeoLocationArchive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocationArchiveName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationArchiveName = this._geoLocationArchiveName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
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

  public set internalValue(value: ExportGeoLocationArchive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoLocationArchiveName = undefined;
      this._password = undefined;
      this._remoteFile = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoLocationArchiveName = value.geoLocationArchiveName;
      this._password = value.password;
      this._remoteFile = value.remoteFile;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // geo_location_archive_name - computed: false, optional: true, required: false
  private _geoLocationArchiveName?: string; 
  public get geoLocationArchiveName() {
    return this.getStringAttribute('geo_location_archive_name');
  }
  public set geoLocationArchiveName(value: string) {
    this._geoLocationArchiveName = value;
  }
  public resetGeoLocationArchiveName() {
    this._geoLocationArchiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationArchiveNameInput() {
    return this._geoLocationArchiveName;
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
export interface ExportStore {
  /**
  * Create an export store profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#create Export#create}
  */
  readonly create?: number;
  /**
  * Delete an export store profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#delete Export#delete}
  */
  readonly delete?: number;
  /**
  * profile name to store remote url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#name Export#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#remote_file Export#remote_file}
  */
  readonly remoteFile?: string;
}

export function exportStoreToTerraform(struct?: ExportStoreOutputReference | ExportStore): any {
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


export function exportStoreToHclTerraform(struct?: ExportStoreOutputReference | ExportStore): any {
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

export class ExportStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExportStore | undefined {
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

  public set internalValue(value: ExportStore | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export thunder_export}
*/
export class Export extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Export resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Export to import
  * @param importFromId The id of the existing Export that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Export to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/export thunder_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_export',
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
    this._axdebug = config.axdebug;
    this._bwList = config.bwList;
    this._caCert = config.caCert;
    this._captureConfig = config.captureConfig;
    this._captureConfigRealtime = config.captureConfigRealtime;
    this._classList = config.classList;
    this._csr = config.csr;
    this._debugMonitor = config.debugMonitor;
    this._debugTrafficCapture = config.debugTrafficCapture;
    this._debugTrafficCaptureChassis = config.debugTrafficCaptureChassis;
    this._debugTrafficCaptureChassisSlot = config.debugTrafficCaptureChassisSlot;
    this._dnssecDnskey = config.dnssecDnskey;
    this._dnssecDs = config.dnssecDs;
    this._domainList = config.domainList;
    this._externalfilename = config.externalfilename;
    this._fixedNat = config.fixedNat;
    this._fixedNatArchive = config.fixedNatArchive;
    this._geoLocation = config.geoLocation;
    this._id = config.id;
    this._ipMapList = config.ipMapList;
    this._ipsecErrorDump = config.ipsecErrorDump;
    this._localUriFile = config.localUriFile;
    this._lw4O6 = config.lw4O6;
    this._lw4O6BindingTableValidationLog = config.lw4O6BindingTableValidationLog;
    this._mergedPcap = config.mergedPcap;
    this._monEntityDebugFile = config.monEntityDebugFile;
    this._password = config.password;
    this._perCpu = config.perCpu;
    this._pktCount = config.pktCount;
    this._pktcaptureFile = config.pktcaptureFile;
    this._profile = config.profile;
    this._remoteFile = config.remoteFile;
    this._rpz = config.rpz;
    this._runningConfig = config.runningConfig;
    this._samlIdpName = config.samlIdpName;
    this._sslCert = config.sslCert;
    this._sslCertKey = config.sslCertKey;
    this._sslCrl = config.sslCrl;
    this._sslKey = config.sslKey;
    this._startupConfig = config.startupConfig;
    this._statusCheck = config.statusCheck;
    this._storeName = config.storeName;
    this._syslog = config.syslog;
    this._tgz = config.tgz;
    this._thalesKmdata = config.thalesKmdata;
    this._thalesSecworld = config.thalesSecworld;
    this._tsig = config.tsig;
    this._useMgmtPort = config.useMgmtPort;
    this._visibility = config.visibility;
    this._xmlSchema = config.xmlSchema;
    this._geoLocationArchive.internalValue = config.geoLocationArchive;
    this._store.internalValue = config.store;
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

  // axdebug - computed: false, optional: true, required: false
  private _axdebug?: string; 
  public get axdebug() {
    return this.getStringAttribute('axdebug');
  }
  public set axdebug(value: string) {
    this._axdebug = value;
  }
  public resetAxdebug() {
    this._axdebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axdebugInput() {
    return this._axdebug;
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

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
  }

  // capture_config_realtime - computed: false, optional: true, required: false
  private _captureConfigRealtime?: string; 
  public get captureConfigRealtime() {
    return this.getStringAttribute('capture_config_realtime');
  }
  public set captureConfigRealtime(value: string) {
    this._captureConfigRealtime = value;
  }
  public resetCaptureConfigRealtime() {
    this._captureConfigRealtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigRealtimeInput() {
    return this._captureConfigRealtime;
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

  // csr - computed: false, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // debug_monitor - computed: false, optional: true, required: false
  private _debugMonitor?: string; 
  public get debugMonitor() {
    return this.getStringAttribute('debug_monitor');
  }
  public set debugMonitor(value: string) {
    this._debugMonitor = value;
  }
  public resetDebugMonitor() {
    this._debugMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugMonitorInput() {
    return this._debugMonitor;
  }

  // debug_traffic_capture - computed: false, optional: true, required: false
  private _debugTrafficCapture?: string; 
  public get debugTrafficCapture() {
    return this.getStringAttribute('debug_traffic_capture');
  }
  public set debugTrafficCapture(value: string) {
    this._debugTrafficCapture = value;
  }
  public resetDebugTrafficCapture() {
    this._debugTrafficCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugTrafficCaptureInput() {
    return this._debugTrafficCapture;
  }

  // debug_traffic_capture_chassis - computed: false, optional: true, required: false
  private _debugTrafficCaptureChassis?: string; 
  public get debugTrafficCaptureChassis() {
    return this.getStringAttribute('debug_traffic_capture_chassis');
  }
  public set debugTrafficCaptureChassis(value: string) {
    this._debugTrafficCaptureChassis = value;
  }
  public resetDebugTrafficCaptureChassis() {
    this._debugTrafficCaptureChassis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugTrafficCaptureChassisInput() {
    return this._debugTrafficCaptureChassis;
  }

  // debug_traffic_capture_chassis_slot - computed: false, optional: true, required: false
  private _debugTrafficCaptureChassisSlot?: number; 
  public get debugTrafficCaptureChassisSlot() {
    return this.getNumberAttribute('debug_traffic_capture_chassis_slot');
  }
  public set debugTrafficCaptureChassisSlot(value: number) {
    this._debugTrafficCaptureChassisSlot = value;
  }
  public resetDebugTrafficCaptureChassisSlot() {
    this._debugTrafficCaptureChassisSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugTrafficCaptureChassisSlotInput() {
    return this._debugTrafficCaptureChassisSlot;
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

  // fixed_nat - computed: false, optional: true, required: false
  private _fixedNat?: string; 
  public get fixedNat() {
    return this.getStringAttribute('fixed_nat');
  }
  public set fixedNat(value: string) {
    this._fixedNat = value;
  }
  public resetFixedNat() {
    this._fixedNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInput() {
    return this._fixedNat;
  }

  // fixed_nat_archive - computed: false, optional: true, required: false
  private _fixedNatArchive?: string; 
  public get fixedNatArchive() {
    return this.getStringAttribute('fixed_nat_archive');
  }
  public set fixedNatArchive(value: string) {
    this._fixedNatArchive = value;
  }
  public resetFixedNatArchive() {
    this._fixedNatArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatArchiveInput() {
    return this._fixedNatArchive;
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

  // ipsec_error_dump - computed: false, optional: true, required: false
  private _ipsecErrorDump?: string; 
  public get ipsecErrorDump() {
    return this.getStringAttribute('ipsec_error_dump');
  }
  public set ipsecErrorDump(value: string) {
    this._ipsecErrorDump = value;
  }
  public resetIpsecErrorDump() {
    this._ipsecErrorDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecErrorDumpInput() {
    return this._ipsecErrorDump;
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

  // lw_4o6_binding_table_validation_log - computed: false, optional: true, required: false
  private _lw4O6BindingTableValidationLog?: string; 
  public get lw4O6BindingTableValidationLog() {
    return this.getStringAttribute('lw_4o6_binding_table_validation_log');
  }
  public set lw4O6BindingTableValidationLog(value: string) {
    this._lw4O6BindingTableValidationLog = value;
  }
  public resetLw4O6BindingTableValidationLog() {
    this._lw4O6BindingTableValidationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6BindingTableValidationLogInput() {
    return this._lw4O6BindingTableValidationLog;
  }

  // merged_pcap - computed: false, optional: true, required: false
  private _mergedPcap?: number; 
  public get mergedPcap() {
    return this.getNumberAttribute('merged_pcap');
  }
  public set mergedPcap(value: number) {
    this._mergedPcap = value;
  }
  public resetMergedPcap() {
    this._mergedPcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedPcapInput() {
    return this._mergedPcap;
  }

  // mon_entity_debug_file - computed: false, optional: true, required: false
  private _monEntityDebugFile?: string; 
  public get monEntityDebugFile() {
    return this.getStringAttribute('mon_entity_debug_file');
  }
  public set monEntityDebugFile(value: string) {
    this._monEntityDebugFile = value;
  }
  public resetMonEntityDebugFile() {
    this._monEntityDebugFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityDebugFileInput() {
    return this._monEntityDebugFile;
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

  // per_cpu - computed: false, optional: true, required: false
  private _perCpu?: number; 
  public get perCpu() {
    return this.getNumberAttribute('per_cpu');
  }
  public set perCpu(value: number) {
    this._perCpu = value;
  }
  public resetPerCpu() {
    this._perCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perCpuInput() {
    return this._perCpu;
  }

  // pkt_count - computed: false, optional: true, required: false
  private _pktCount?: number; 
  public get pktCount() {
    return this.getNumberAttribute('pkt_count');
  }
  public set pktCount(value: number) {
    this._pktCount = value;
  }
  public resetPktCount() {
    this._pktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktCountInput() {
    return this._pktCount;
  }

  // pktcapture_file - computed: false, optional: true, required: false
  private _pktcaptureFile?: string; 
  public get pktcaptureFile() {
    return this.getStringAttribute('pktcapture_file');
  }
  public set pktcaptureFile(value: string) {
    this._pktcaptureFile = value;
  }
  public resetPktcaptureFile() {
    this._pktcaptureFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktcaptureFileInput() {
    return this._pktcaptureFile;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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

  // running_config - computed: false, optional: true, required: false
  private _runningConfig?: number; 
  public get runningConfig() {
    return this.getNumberAttribute('running_config');
  }
  public set runningConfig(value: number) {
    this._runningConfig = value;
  }
  public resetRunningConfig() {
    this._runningConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningConfigInput() {
    return this._runningConfig;
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

  // startup_config - computed: false, optional: true, required: false
  private _startupConfig?: number; 
  public get startupConfig() {
    return this.getNumberAttribute('startup_config');
  }
  public set startupConfig(value: number) {
    this._startupConfig = value;
  }
  public resetStartupConfig() {
    this._startupConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupConfigInput() {
    return this._startupConfig;
  }

  // status_check - computed: false, optional: true, required: false
  private _statusCheck?: number; 
  public get statusCheck() {
    return this.getNumberAttribute('status_check');
  }
  public set statusCheck(value: number) {
    this._statusCheck = value;
  }
  public resetStatusCheck() {
    this._statusCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckInput() {
    return this._statusCheck;
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

  // syslog - computed: false, optional: true, required: false
  private _syslog?: string; 
  public get syslog() {
    return this.getStringAttribute('syslog');
  }
  public set syslog(value: string) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }

  // tgz - computed: false, optional: true, required: false
  private _tgz?: number; 
  public get tgz() {
    return this.getNumberAttribute('tgz');
  }
  public set tgz(value: number) {
    this._tgz = value;
  }
  public resetTgz() {
    this._tgz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgzInput() {
    return this._tgz;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: number; 
  public get visibility() {
    return this.getNumberAttribute('visibility');
  }
  public set visibility(value: number) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
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

  // geo_location_archive - computed: false, optional: true, required: false
  private _geoLocationArchive = new ExportGeoLocationArchiveOutputReference(this, "geo_location_archive");
  public get geoLocationArchive() {
    return this._geoLocationArchive;
  }
  public putGeoLocationArchive(value: ExportGeoLocationArchive) {
    this._geoLocationArchive.internalValue = value;
  }
  public resetGeoLocationArchive() {
    this._geoLocationArchive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationArchiveInput() {
    return this._geoLocationArchive.internalValue;
  }

  // store - computed: false, optional: true, required: false
  private _store = new ExportStoreOutputReference(this, "store");
  public get store() {
    return this._store;
  }
  public putStore(value: ExportStore) {
    this._store.internalValue = value;
  }
  public resetStore() {
    this._store.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store.internalValue;
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
      axdebug: cdktf.stringToTerraform(this._axdebug),
      bw_list: cdktf.stringToTerraform(this._bwList),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      capture_config_realtime: cdktf.stringToTerraform(this._captureConfigRealtime),
      class_list: cdktf.stringToTerraform(this._classList),
      csr: cdktf.stringToTerraform(this._csr),
      debug_monitor: cdktf.stringToTerraform(this._debugMonitor),
      debug_traffic_capture: cdktf.stringToTerraform(this._debugTrafficCapture),
      debug_traffic_capture_chassis: cdktf.stringToTerraform(this._debugTrafficCaptureChassis),
      debug_traffic_capture_chassis_slot: cdktf.numberToTerraform(this._debugTrafficCaptureChassisSlot),
      dnssec_dnskey: cdktf.stringToTerraform(this._dnssecDnskey),
      dnssec_ds: cdktf.stringToTerraform(this._dnssecDs),
      domain_list: cdktf.stringToTerraform(this._domainList),
      externalfilename: cdktf.stringToTerraform(this._externalfilename),
      fixed_nat: cdktf.stringToTerraform(this._fixedNat),
      fixed_nat_archive: cdktf.stringToTerraform(this._fixedNatArchive),
      geo_location: cdktf.stringToTerraform(this._geoLocation),
      id: cdktf.stringToTerraform(this._id),
      ip_map_list: cdktf.stringToTerraform(this._ipMapList),
      ipsec_error_dump: cdktf.stringToTerraform(this._ipsecErrorDump),
      local_uri_file: cdktf.stringToTerraform(this._localUriFile),
      lw_4o6: cdktf.stringToTerraform(this._lw4O6),
      lw_4o6_binding_table_validation_log: cdktf.stringToTerraform(this._lw4O6BindingTableValidationLog),
      merged_pcap: cdktf.numberToTerraform(this._mergedPcap),
      mon_entity_debug_file: cdktf.stringToTerraform(this._monEntityDebugFile),
      password: cdktf.stringToTerraform(this._password),
      per_cpu: cdktf.numberToTerraform(this._perCpu),
      pkt_count: cdktf.numberToTerraform(this._pktCount),
      pktcapture_file: cdktf.stringToTerraform(this._pktcaptureFile),
      profile: cdktf.stringToTerraform(this._profile),
      remote_file: cdktf.stringToTerraform(this._remoteFile),
      rpz: cdktf.stringToTerraform(this._rpz),
      running_config: cdktf.numberToTerraform(this._runningConfig),
      saml_idp_name: cdktf.stringToTerraform(this._samlIdpName),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      ssl_cert_key: cdktf.stringToTerraform(this._sslCertKey),
      ssl_crl: cdktf.stringToTerraform(this._sslCrl),
      ssl_key: cdktf.stringToTerraform(this._sslKey),
      startup_config: cdktf.numberToTerraform(this._startupConfig),
      status_check: cdktf.numberToTerraform(this._statusCheck),
      store_name: cdktf.stringToTerraform(this._storeName),
      syslog: cdktf.stringToTerraform(this._syslog),
      tgz: cdktf.numberToTerraform(this._tgz),
      thales_kmdata: cdktf.stringToTerraform(this._thalesKmdata),
      thales_secworld: cdktf.stringToTerraform(this._thalesSecworld),
      tsig: cdktf.stringToTerraform(this._tsig),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      visibility: cdktf.numberToTerraform(this._visibility),
      xml_schema: cdktf.stringToTerraform(this._xmlSchema),
      geo_location_archive: exportGeoLocationArchiveToTerraform(this._geoLocationArchive.internalValue),
      store: exportStoreToTerraform(this._store.internalValue),
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
      axdebug: {
        value: cdktf.stringToHclTerraform(this._axdebug),
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
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capture_config_realtime: {
        value: cdktf.stringToHclTerraform(this._captureConfigRealtime),
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
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_monitor: {
        value: cdktf.stringToHclTerraform(this._debugMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_traffic_capture: {
        value: cdktf.stringToHclTerraform(this._debugTrafficCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_traffic_capture_chassis: {
        value: cdktf.stringToHclTerraform(this._debugTrafficCaptureChassis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_traffic_capture_chassis_slot: {
        value: cdktf.numberToHclTerraform(this._debugTrafficCaptureChassisSlot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      externalfilename: {
        value: cdktf.stringToHclTerraform(this._externalfilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_nat: {
        value: cdktf.stringToHclTerraform(this._fixedNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_nat_archive: {
        value: cdktf.stringToHclTerraform(this._fixedNatArchive),
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
      ipsec_error_dump: {
        value: cdktf.stringToHclTerraform(this._ipsecErrorDump),
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
      lw_4o6_binding_table_validation_log: {
        value: cdktf.stringToHclTerraform(this._lw4O6BindingTableValidationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merged_pcap: {
        value: cdktf.numberToHclTerraform(this._mergedPcap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mon_entity_debug_file: {
        value: cdktf.stringToHclTerraform(this._monEntityDebugFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_cpu: {
        value: cdktf.numberToHclTerraform(this._perCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_count: {
        value: cdktf.numberToHclTerraform(this._pktCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pktcapture_file: {
        value: cdktf.stringToHclTerraform(this._pktcaptureFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
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
      rpz: {
        value: cdktf.stringToHclTerraform(this._rpz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      running_config: {
        value: cdktf.numberToHclTerraform(this._runningConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      saml_idp_name: {
        value: cdktf.stringToHclTerraform(this._samlIdpName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      startup_config: {
        value: cdktf.numberToHclTerraform(this._startupConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status_check: {
        value: cdktf.numberToHclTerraform(this._statusCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      store_name: {
        value: cdktf.stringToHclTerraform(this._storeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog: {
        value: cdktf.stringToHclTerraform(this._syslog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgz: {
        value: cdktf.numberToHclTerraform(this._tgz),
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
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      visibility: {
        value: cdktf.numberToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xml_schema: {
        value: cdktf.stringToHclTerraform(this._xmlSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_location_archive: {
        value: exportGeoLocationArchiveToHclTerraform(this._geoLocationArchive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExportGeoLocationArchiveList",
      },
      store: {
        value: exportStoreToHclTerraform(this._store.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExportStoreList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
