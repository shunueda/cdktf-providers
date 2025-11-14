// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectAntivirusProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#adom ObjectAntivirusProfile#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#analytics_accept_filetype ObjectAntivirusProfile#analytics_accept_filetype}
  */
  readonly analyticsAcceptFiletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#analytics_bl_filetype ObjectAntivirusProfile#analytics_bl_filetype}
  */
  readonly analyticsBlFiletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#analytics_db ObjectAntivirusProfile#analytics_db}
  */
  readonly analyticsDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#analytics_ignore_filetype ObjectAntivirusProfile#analytics_ignore_filetype}
  */
  readonly analyticsIgnoreFiletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#analytics_max_upload ObjectAntivirusProfile#analytics_max_upload}
  */
  readonly analyticsMaxUpload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#analytics_wl_filetype ObjectAntivirusProfile#analytics_wl_filetype}
  */
  readonly analyticsWlFiletype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_block_log ObjectAntivirusProfile#av_block_log}
  */
  readonly avBlockLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_virus_log ObjectAntivirusProfile#av_virus_log}
  */
  readonly avVirusLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#comment ObjectAntivirusProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#ems_threat_feed ObjectAntivirusProfile#ems_threat_feed}
  */
  readonly emsThreatFeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#extended_log ObjectAntivirusProfile#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist_archive_scan ObjectAntivirusProfile#external_blocklist_archive_scan}
  */
  readonly externalBlocklistArchiveScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist_enable_all ObjectAntivirusProfile#external_blocklist_enable_all}
  */
  readonly externalBlocklistEnableAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#feature_set ObjectAntivirusProfile#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai_error_action ObjectAntivirusProfile#fortiai_error_action}
  */
  readonly fortiaiErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai_timeout_action ObjectAntivirusProfile#fortiai_timeout_action}
  */
  readonly fortiaiTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr_error_action ObjectAntivirusProfile#fortindr_error_action}
  */
  readonly fortindrErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr_timeout_action ObjectAntivirusProfile#fortindr_timeout_action}
  */
  readonly fortindrTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox_error_action ObjectAntivirusProfile#fortisandbox_error_action}
  */
  readonly fortisandboxErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox_max_upload ObjectAntivirusProfile#fortisandbox_max_upload}
  */
  readonly fortisandboxMaxUpload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox_mode ObjectAntivirusProfile#fortisandbox_mode}
  */
  readonly fortisandboxMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox_timeout_action ObjectAntivirusProfile#fortisandbox_timeout_action}
  */
  readonly fortisandboxTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#ftgd_analytics ObjectAntivirusProfile#ftgd_analytics}
  */
  readonly ftgdAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#id ObjectAntivirusProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#inspection_mode ObjectAntivirusProfile#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#mobile_malware_db ObjectAntivirusProfile#mobile_malware_db}
  */
  readonly mobileMalwareDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#name ObjectAntivirusProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention_archive_scan ObjectAntivirusProfile#outbreak_prevention_archive_scan}
  */
  readonly outbreakPreventionArchiveScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#replacemsg_group ObjectAntivirusProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#scan_mode ObjectAntivirusProfile#scan_mode}
  */
  readonly scanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#scopetype ObjectAntivirusProfile#scopetype}
  */
  readonly scopetype?: string;
  /**
  * cifs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#cifs ObjectAntivirusProfile#cifs}
  */
  readonly cifs?: ObjectAntivirusProfileCifs;
  /**
  * content_disarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#content_disarm ObjectAntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: ObjectAntivirusProfileContentDisarm;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#ftp ObjectAntivirusProfile#ftp}
  */
  readonly ftp?: ObjectAntivirusProfileFtp;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#http ObjectAntivirusProfile#http}
  */
  readonly http?: ObjectAntivirusProfileHttp;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#imap ObjectAntivirusProfile#imap}
  */
  readonly imap?: ObjectAntivirusProfileImap;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#mapi ObjectAntivirusProfile#mapi}
  */
  readonly mapi?: ObjectAntivirusProfileMapi;
  /**
  * nac_quar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#nac_quar ObjectAntivirusProfile#nac_quar}
  */
  readonly nacQuar?: ObjectAntivirusProfileNacQuar;
  /**
  * nntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#nntp ObjectAntivirusProfile#nntp}
  */
  readonly nntp?: ObjectAntivirusProfileNntp;
  /**
  * outbreak_prevention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: ObjectAntivirusProfileOutbreakPrevention;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pop3 ObjectAntivirusProfile#pop3}
  */
  readonly pop3?: ObjectAntivirusProfilePop3;
  /**
  * smb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#smb ObjectAntivirusProfile#smb}
  */
  readonly smb?: ObjectAntivirusProfileSmb;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#smtp ObjectAntivirusProfile#smtp}
  */
  readonly smtp?: ObjectAntivirusProfileSmtp;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#ssh ObjectAntivirusProfile#ssh}
  */
  readonly ssh?: ObjectAntivirusProfileSsh;
}
export interface ObjectAntivirusProfileCifs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfileCifsToTerraform(struct?: ObjectAntivirusProfileCifsOutputReference | ObjectAntivirusProfileCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfileCifsToHclTerraform(struct?: ObjectAntivirusProfileCifsOutputReference | ObjectAntivirusProfileCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileCifsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileCifs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileCifs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._emulator = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._emulator = value.emulator;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: true, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: true, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}
export interface ObjectAntivirusProfileContentDisarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#analytics_suspicious ObjectAntivirusProfile#analytics_suspicious}
  */
  readonly analyticsSuspicious?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#cover_page ObjectAntivirusProfile#cover_page}
  */
  readonly coverPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#detect_only ObjectAntivirusProfile#detect_only}
  */
  readonly detectOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#error_action ObjectAntivirusProfile#error_action}
  */
  readonly errorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#office_action ObjectAntivirusProfile#office_action}
  */
  readonly officeAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#office_dde ObjectAntivirusProfile#office_dde}
  */
  readonly officeDde?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#office_embed ObjectAntivirusProfile#office_embed}
  */
  readonly officeEmbed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#office_hylink ObjectAntivirusProfile#office_hylink}
  */
  readonly officeHylink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#office_linked ObjectAntivirusProfile#office_linked}
  */
  readonly officeLinked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#office_macro ObjectAntivirusProfile#office_macro}
  */
  readonly officeMacro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#original_file_destination ObjectAntivirusProfile#original_file_destination}
  */
  readonly originalFileDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_act_form ObjectAntivirusProfile#pdf_act_form}
  */
  readonly pdfActForm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_act_gotor ObjectAntivirusProfile#pdf_act_gotor}
  */
  readonly pdfActGotor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_act_java ObjectAntivirusProfile#pdf_act_java}
  */
  readonly pdfActJava?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_act_launch ObjectAntivirusProfile#pdf_act_launch}
  */
  readonly pdfActLaunch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_act_movie ObjectAntivirusProfile#pdf_act_movie}
  */
  readonly pdfActMovie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_act_sound ObjectAntivirusProfile#pdf_act_sound}
  */
  readonly pdfActSound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_embedfile ObjectAntivirusProfile#pdf_embedfile}
  */
  readonly pdfEmbedfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_hyperlink ObjectAntivirusProfile#pdf_hyperlink}
  */
  readonly pdfHyperlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#pdf_javacode ObjectAntivirusProfile#pdf_javacode}
  */
  readonly pdfJavacode?: string;
}

export function objectAntivirusProfileContentDisarmToTerraform(struct?: ObjectAntivirusProfileContentDisarmOutputReference | ObjectAntivirusProfileContentDisarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_suspicious: cdktf.stringToTerraform(struct!.analyticsSuspicious),
    cover_page: cdktf.stringToTerraform(struct!.coverPage),
    detect_only: cdktf.stringToTerraform(struct!.detectOnly),
    error_action: cdktf.stringToTerraform(struct!.errorAction),
    office_action: cdktf.stringToTerraform(struct!.officeAction),
    office_dde: cdktf.stringToTerraform(struct!.officeDde),
    office_embed: cdktf.stringToTerraform(struct!.officeEmbed),
    office_hylink: cdktf.stringToTerraform(struct!.officeHylink),
    office_linked: cdktf.stringToTerraform(struct!.officeLinked),
    office_macro: cdktf.stringToTerraform(struct!.officeMacro),
    original_file_destination: cdktf.stringToTerraform(struct!.originalFileDestination),
    pdf_act_form: cdktf.stringToTerraform(struct!.pdfActForm),
    pdf_act_gotor: cdktf.stringToTerraform(struct!.pdfActGotor),
    pdf_act_java: cdktf.stringToTerraform(struct!.pdfActJava),
    pdf_act_launch: cdktf.stringToTerraform(struct!.pdfActLaunch),
    pdf_act_movie: cdktf.stringToTerraform(struct!.pdfActMovie),
    pdf_act_sound: cdktf.stringToTerraform(struct!.pdfActSound),
    pdf_embedfile: cdktf.stringToTerraform(struct!.pdfEmbedfile),
    pdf_hyperlink: cdktf.stringToTerraform(struct!.pdfHyperlink),
    pdf_javacode: cdktf.stringToTerraform(struct!.pdfJavacode),
  }
}


export function objectAntivirusProfileContentDisarmToHclTerraform(struct?: ObjectAntivirusProfileContentDisarmOutputReference | ObjectAntivirusProfileContentDisarm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_suspicious: {
      value: cdktf.stringToHclTerraform(struct!.analyticsSuspicious),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cover_page: {
      value: cdktf.stringToHclTerraform(struct!.coverPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detect_only: {
      value: cdktf.stringToHclTerraform(struct!.detectOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_action: {
      value: cdktf.stringToHclTerraform(struct!.errorAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    office_action: {
      value: cdktf.stringToHclTerraform(struct!.officeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    office_dde: {
      value: cdktf.stringToHclTerraform(struct!.officeDde),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    office_embed: {
      value: cdktf.stringToHclTerraform(struct!.officeEmbed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    office_hylink: {
      value: cdktf.stringToHclTerraform(struct!.officeHylink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    office_linked: {
      value: cdktf.stringToHclTerraform(struct!.officeLinked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    office_macro: {
      value: cdktf.stringToHclTerraform(struct!.officeMacro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_file_destination: {
      value: cdktf.stringToHclTerraform(struct!.originalFileDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_act_form: {
      value: cdktf.stringToHclTerraform(struct!.pdfActForm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_act_gotor: {
      value: cdktf.stringToHclTerraform(struct!.pdfActGotor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_act_java: {
      value: cdktf.stringToHclTerraform(struct!.pdfActJava),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_act_launch: {
      value: cdktf.stringToHclTerraform(struct!.pdfActLaunch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_act_movie: {
      value: cdktf.stringToHclTerraform(struct!.pdfActMovie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_act_sound: {
      value: cdktf.stringToHclTerraform(struct!.pdfActSound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_embedfile: {
      value: cdktf.stringToHclTerraform(struct!.pdfEmbedfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_hyperlink: {
      value: cdktf.stringToHclTerraform(struct!.pdfHyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_javacode: {
      value: cdktf.stringToHclTerraform(struct!.pdfJavacode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileContentDisarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileContentDisarm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsSuspicious !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsSuspicious = this._analyticsSuspicious;
    }
    if (this._coverPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.coverPage = this._coverPage;
    }
    if (this._detectOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectOnly = this._detectOnly;
    }
    if (this._errorAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAction = this._errorAction;
    }
    if (this._officeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.officeAction = this._officeAction;
    }
    if (this._officeDde !== undefined) {
      hasAnyValues = true;
      internalValueResult.officeDde = this._officeDde;
    }
    if (this._officeEmbed !== undefined) {
      hasAnyValues = true;
      internalValueResult.officeEmbed = this._officeEmbed;
    }
    if (this._officeHylink !== undefined) {
      hasAnyValues = true;
      internalValueResult.officeHylink = this._officeHylink;
    }
    if (this._officeLinked !== undefined) {
      hasAnyValues = true;
      internalValueResult.officeLinked = this._officeLinked;
    }
    if (this._officeMacro !== undefined) {
      hasAnyValues = true;
      internalValueResult.officeMacro = this._officeMacro;
    }
    if (this._originalFileDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalFileDestination = this._originalFileDestination;
    }
    if (this._pdfActForm !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfActForm = this._pdfActForm;
    }
    if (this._pdfActGotor !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfActGotor = this._pdfActGotor;
    }
    if (this._pdfActJava !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfActJava = this._pdfActJava;
    }
    if (this._pdfActLaunch !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfActLaunch = this._pdfActLaunch;
    }
    if (this._pdfActMovie !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfActMovie = this._pdfActMovie;
    }
    if (this._pdfActSound !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfActSound = this._pdfActSound;
    }
    if (this._pdfEmbedfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfEmbedfile = this._pdfEmbedfile;
    }
    if (this._pdfHyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfHyperlink = this._pdfHyperlink;
    }
    if (this._pdfJavacode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfJavacode = this._pdfJavacode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileContentDisarm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._analyticsSuspicious = undefined;
      this._coverPage = undefined;
      this._detectOnly = undefined;
      this._errorAction = undefined;
      this._officeAction = undefined;
      this._officeDde = undefined;
      this._officeEmbed = undefined;
      this._officeHylink = undefined;
      this._officeLinked = undefined;
      this._officeMacro = undefined;
      this._originalFileDestination = undefined;
      this._pdfActForm = undefined;
      this._pdfActGotor = undefined;
      this._pdfActJava = undefined;
      this._pdfActLaunch = undefined;
      this._pdfActMovie = undefined;
      this._pdfActSound = undefined;
      this._pdfEmbedfile = undefined;
      this._pdfHyperlink = undefined;
      this._pdfJavacode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._analyticsSuspicious = value.analyticsSuspicious;
      this._coverPage = value.coverPage;
      this._detectOnly = value.detectOnly;
      this._errorAction = value.errorAction;
      this._officeAction = value.officeAction;
      this._officeDde = value.officeDde;
      this._officeEmbed = value.officeEmbed;
      this._officeHylink = value.officeHylink;
      this._officeLinked = value.officeLinked;
      this._officeMacro = value.officeMacro;
      this._originalFileDestination = value.originalFileDestination;
      this._pdfActForm = value.pdfActForm;
      this._pdfActGotor = value.pdfActGotor;
      this._pdfActJava = value.pdfActJava;
      this._pdfActLaunch = value.pdfActLaunch;
      this._pdfActMovie = value.pdfActMovie;
      this._pdfActSound = value.pdfActSound;
      this._pdfEmbedfile = value.pdfEmbedfile;
      this._pdfHyperlink = value.pdfHyperlink;
      this._pdfJavacode = value.pdfJavacode;
    }
  }

  // analytics_suspicious - computed: false, optional: true, required: false
  private _analyticsSuspicious?: string; 
  public get analyticsSuspicious() {
    return this.getStringAttribute('analytics_suspicious');
  }
  public set analyticsSuspicious(value: string) {
    this._analyticsSuspicious = value;
  }
  public resetAnalyticsSuspicious() {
    this._analyticsSuspicious = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsSuspiciousInput() {
    return this._analyticsSuspicious;
  }

  // cover_page - computed: true, optional: true, required: false
  private _coverPage?: string; 
  public get coverPage() {
    return this.getStringAttribute('cover_page');
  }
  public set coverPage(value: string) {
    this._coverPage = value;
  }
  public resetCoverPage() {
    this._coverPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverPageInput() {
    return this._coverPage;
  }

  // detect_only - computed: true, optional: true, required: false
  private _detectOnly?: string; 
  public get detectOnly() {
    return this.getStringAttribute('detect_only');
  }
  public set detectOnly(value: string) {
    this._detectOnly = value;
  }
  public resetDetectOnly() {
    this._detectOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectOnlyInput() {
    return this._detectOnly;
  }

  // error_action - computed: true, optional: true, required: false
  private _errorAction?: string; 
  public get errorAction() {
    return this.getStringAttribute('error_action');
  }
  public set errorAction(value: string) {
    this._errorAction = value;
  }
  public resetErrorAction() {
    this._errorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorActionInput() {
    return this._errorAction;
  }

  // office_action - computed: true, optional: true, required: false
  private _officeAction?: string; 
  public get officeAction() {
    return this.getStringAttribute('office_action');
  }
  public set officeAction(value: string) {
    this._officeAction = value;
  }
  public resetOfficeAction() {
    this._officeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeActionInput() {
    return this._officeAction;
  }

  // office_dde - computed: true, optional: true, required: false
  private _officeDde?: string; 
  public get officeDde() {
    return this.getStringAttribute('office_dde');
  }
  public set officeDde(value: string) {
    this._officeDde = value;
  }
  public resetOfficeDde() {
    this._officeDde = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeDdeInput() {
    return this._officeDde;
  }

  // office_embed - computed: true, optional: true, required: false
  private _officeEmbed?: string; 
  public get officeEmbed() {
    return this.getStringAttribute('office_embed');
  }
  public set officeEmbed(value: string) {
    this._officeEmbed = value;
  }
  public resetOfficeEmbed() {
    this._officeEmbed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeEmbedInput() {
    return this._officeEmbed;
  }

  // office_hylink - computed: true, optional: true, required: false
  private _officeHylink?: string; 
  public get officeHylink() {
    return this.getStringAttribute('office_hylink');
  }
  public set officeHylink(value: string) {
    this._officeHylink = value;
  }
  public resetOfficeHylink() {
    this._officeHylink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeHylinkInput() {
    return this._officeHylink;
  }

  // office_linked - computed: true, optional: true, required: false
  private _officeLinked?: string; 
  public get officeLinked() {
    return this.getStringAttribute('office_linked');
  }
  public set officeLinked(value: string) {
    this._officeLinked = value;
  }
  public resetOfficeLinked() {
    this._officeLinked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeLinkedInput() {
    return this._officeLinked;
  }

  // office_macro - computed: true, optional: true, required: false
  private _officeMacro?: string; 
  public get officeMacro() {
    return this.getStringAttribute('office_macro');
  }
  public set officeMacro(value: string) {
    this._officeMacro = value;
  }
  public resetOfficeMacro() {
    this._officeMacro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officeMacroInput() {
    return this._officeMacro;
  }

  // original_file_destination - computed: true, optional: true, required: false
  private _originalFileDestination?: string; 
  public get originalFileDestination() {
    return this.getStringAttribute('original_file_destination');
  }
  public set originalFileDestination(value: string) {
    this._originalFileDestination = value;
  }
  public resetOriginalFileDestination() {
    this._originalFileDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalFileDestinationInput() {
    return this._originalFileDestination;
  }

  // pdf_act_form - computed: true, optional: true, required: false
  private _pdfActForm?: string; 
  public get pdfActForm() {
    return this.getStringAttribute('pdf_act_form');
  }
  public set pdfActForm(value: string) {
    this._pdfActForm = value;
  }
  public resetPdfActForm() {
    this._pdfActForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActFormInput() {
    return this._pdfActForm;
  }

  // pdf_act_gotor - computed: true, optional: true, required: false
  private _pdfActGotor?: string; 
  public get pdfActGotor() {
    return this.getStringAttribute('pdf_act_gotor');
  }
  public set pdfActGotor(value: string) {
    this._pdfActGotor = value;
  }
  public resetPdfActGotor() {
    this._pdfActGotor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActGotorInput() {
    return this._pdfActGotor;
  }

  // pdf_act_java - computed: true, optional: true, required: false
  private _pdfActJava?: string; 
  public get pdfActJava() {
    return this.getStringAttribute('pdf_act_java');
  }
  public set pdfActJava(value: string) {
    this._pdfActJava = value;
  }
  public resetPdfActJava() {
    this._pdfActJava = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActJavaInput() {
    return this._pdfActJava;
  }

  // pdf_act_launch - computed: true, optional: true, required: false
  private _pdfActLaunch?: string; 
  public get pdfActLaunch() {
    return this.getStringAttribute('pdf_act_launch');
  }
  public set pdfActLaunch(value: string) {
    this._pdfActLaunch = value;
  }
  public resetPdfActLaunch() {
    this._pdfActLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActLaunchInput() {
    return this._pdfActLaunch;
  }

  // pdf_act_movie - computed: true, optional: true, required: false
  private _pdfActMovie?: string; 
  public get pdfActMovie() {
    return this.getStringAttribute('pdf_act_movie');
  }
  public set pdfActMovie(value: string) {
    this._pdfActMovie = value;
  }
  public resetPdfActMovie() {
    this._pdfActMovie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActMovieInput() {
    return this._pdfActMovie;
  }

  // pdf_act_sound - computed: true, optional: true, required: false
  private _pdfActSound?: string; 
  public get pdfActSound() {
    return this.getStringAttribute('pdf_act_sound');
  }
  public set pdfActSound(value: string) {
    this._pdfActSound = value;
  }
  public resetPdfActSound() {
    this._pdfActSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfActSoundInput() {
    return this._pdfActSound;
  }

  // pdf_embedfile - computed: true, optional: true, required: false
  private _pdfEmbedfile?: string; 
  public get pdfEmbedfile() {
    return this.getStringAttribute('pdf_embedfile');
  }
  public set pdfEmbedfile(value: string) {
    this._pdfEmbedfile = value;
  }
  public resetPdfEmbedfile() {
    this._pdfEmbedfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfEmbedfileInput() {
    return this._pdfEmbedfile;
  }

  // pdf_hyperlink - computed: true, optional: true, required: false
  private _pdfHyperlink?: string; 
  public get pdfHyperlink() {
    return this.getStringAttribute('pdf_hyperlink');
  }
  public set pdfHyperlink(value: string) {
    this._pdfHyperlink = value;
  }
  public resetPdfHyperlink() {
    this._pdfHyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfHyperlinkInput() {
    return this._pdfHyperlink;
  }

  // pdf_javacode - computed: true, optional: true, required: false
  private _pdfJavacode?: string; 
  public get pdfJavacode() {
    return this.getStringAttribute('pdf_javacode');
  }
  public set pdfJavacode(value: string) {
    this._pdfJavacode = value;
  }
  public resetPdfJavacode() {
    this._pdfJavacode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfJavacodeInput() {
    return this._pdfJavacode;
  }
}
export interface ObjectAntivirusProfileFtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfileFtpToTerraform(struct?: ObjectAntivirusProfileFtpOutputReference | ObjectAntivirusProfileFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfileFtpToHclTerraform(struct?: ObjectAntivirusProfileFtpOutputReference | ObjectAntivirusProfileFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._emulator = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._emulator = value.emulator;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: true, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: true, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}
export interface ObjectAntivirusProfileHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_optimize ObjectAntivirusProfile#av_optimize}
  */
  readonly avOptimize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#content_disarm ObjectAntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#unknown_content_encoding ObjectAntivirusProfile#unknown_content_encoding}
  */
  readonly unknownContentEncoding?: string;
}

export function objectAntivirusProfileHttpToTerraform(struct?: ObjectAntivirusProfileHttpOutputReference | ObjectAntivirusProfileHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_optimize: cdktf.stringToTerraform(struct!.avOptimize),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    unknown_content_encoding: cdktf.stringToTerraform(struct!.unknownContentEncoding),
  }
}


export function objectAntivirusProfileHttpToHclTerraform(struct?: ObjectAntivirusProfileHttpOutputReference | ObjectAntivirusProfileHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_optimize: {
      value: cdktf.stringToHclTerraform(struct!.avOptimize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_disarm: {
      value: cdktf.stringToHclTerraform(struct!.contentDisarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknown_content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.unknownContentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avOptimize !== undefined) {
      hasAnyValues = true;
      internalValueResult.avOptimize = this._avOptimize;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._contentDisarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisarm = this._contentDisarm;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._unknownContentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownContentEncoding = this._unknownContentEncoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avOptimize = undefined;
      this._avScan = undefined;
      this._contentDisarm = undefined;
      this._emulator = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
      this._unknownContentEncoding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avOptimize = value.avOptimize;
      this._avScan = value.avScan;
      this._contentDisarm = value.contentDisarm;
      this._emulator = value.emulator;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
      this._unknownContentEncoding = value.unknownContentEncoding;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_optimize - computed: false, optional: true, required: false
  private _avOptimize?: string; 
  public get avOptimize() {
    return this.getStringAttribute('av_optimize');
  }
  public set avOptimize(value: string) {
    this._avOptimize = value;
  }
  public resetAvOptimize() {
    this._avOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avOptimizeInput() {
    return this._avOptimize;
  }

  // av_scan - computed: true, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // content_disarm - computed: true, optional: true, required: false
  private _contentDisarm?: string; 
  public get contentDisarm() {
    return this.getStringAttribute('content_disarm');
  }
  public set contentDisarm(value: string) {
    this._contentDisarm = value;
  }
  public resetContentDisarm() {
    this._contentDisarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDisarmInput() {
    return this._contentDisarm;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: true, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // unknown_content_encoding - computed: true, optional: true, required: false
  private _unknownContentEncoding?: string; 
  public get unknownContentEncoding() {
    return this.getStringAttribute('unknown_content_encoding');
  }
  public set unknownContentEncoding(value: string) {
    this._unknownContentEncoding = value;
  }
  public resetUnknownContentEncoding() {
    this._unknownContentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownContentEncodingInput() {
    return this._unknownContentEncoding;
  }
}
export interface ObjectAntivirusProfileImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#content_disarm ObjectAntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#executables ObjectAntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfileImapToTerraform(struct?: ObjectAntivirusProfileImapOutputReference | ObjectAntivirusProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfileImapToHclTerraform(struct?: ObjectAntivirusProfileImapOutputReference | ObjectAntivirusProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_disarm: {
      value: cdktf.stringToHclTerraform(struct!.contentDisarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executables: {
      value: cdktf.stringToHclTerraform(struct!.executables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileImap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._contentDisarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisarm = this._contentDisarm;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._executables !== undefined) {
      hasAnyValues = true;
      internalValueResult.executables = this._executables;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileImap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._contentDisarm = undefined;
      this._emulator = undefined;
      this._executables = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._contentDisarm = value.contentDisarm;
      this._emulator = value.emulator;
      this._executables = value.executables;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: true, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // content_disarm - computed: true, optional: true, required: false
  private _contentDisarm?: string; 
  public get contentDisarm() {
    return this.getStringAttribute('content_disarm');
  }
  public set contentDisarm(value: string) {
    this._contentDisarm = value;
  }
  public resetContentDisarm() {
    this._contentDisarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDisarmInput() {
    return this._contentDisarm;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // executables - computed: true, optional: true, required: false
  private _executables?: string; 
  public get executables() {
    return this.getStringAttribute('executables');
  }
  public set executables(value: string) {
    this._executables = value;
  }
  public resetExecutables() {
    this._executables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executablesInput() {
    return this._executables;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: true, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}
export interface ObjectAntivirusProfileMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#executables ObjectAntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfileMapiToTerraform(struct?: ObjectAntivirusProfileMapiOutputReference | ObjectAntivirusProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfileMapiToHclTerraform(struct?: ObjectAntivirusProfileMapiOutputReference | ObjectAntivirusProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executables: {
      value: cdktf.stringToHclTerraform(struct!.executables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileMapi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._executables !== undefined) {
      hasAnyValues = true;
      internalValueResult.executables = this._executables;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileMapi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._emulator = undefined;
      this._executables = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._emulator = value.emulator;
      this._executables = value.executables;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: false, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // emulator - computed: false, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // executables - computed: false, optional: true, required: false
  private _executables?: string; 
  public get executables() {
    return this.getStringAttribute('executables');
  }
  public set executables(value: string) {
    this._executables = value;
  }
  public resetExecutables() {
    this._executables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executablesInput() {
    return this._executables;
  }

  // external_blocklist - computed: false, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: false, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: false, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: false, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: false, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: false, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}
export interface ObjectAntivirusProfileNacQuar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#expiry ObjectAntivirusProfile#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#infected ObjectAntivirusProfile#infected}
  */
  readonly infected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#log ObjectAntivirusProfile#log}
  */
  readonly log?: string;
}

export function objectAntivirusProfileNacQuarToTerraform(struct?: ObjectAntivirusProfileNacQuarOutputReference | ObjectAntivirusProfileNacQuar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiry: cdktf.stringToTerraform(struct!.expiry),
    infected: cdktf.stringToTerraform(struct!.infected),
    log: cdktf.stringToTerraform(struct!.log),
  }
}


export function objectAntivirusProfileNacQuarToHclTerraform(struct?: ObjectAntivirusProfileNacQuarOutputReference | ObjectAntivirusProfileNacQuar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiry: {
      value: cdktf.stringToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infected: {
      value: cdktf.stringToHclTerraform(struct!.infected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileNacQuarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileNacQuar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._infected !== undefined) {
      hasAnyValues = true;
      internalValueResult.infected = this._infected;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileNacQuar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expiry = undefined;
      this._infected = undefined;
      this._log = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expiry = value.expiry;
      this._infected = value.infected;
      this._log = value.log;
    }
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

  // infected - computed: true, optional: true, required: false
  private _infected?: string; 
  public get infected() {
    return this.getStringAttribute('infected');
  }
  public set infected(value: string) {
    this._infected = value;
  }
  public resetInfected() {
    this._infected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infectedInput() {
    return this._infected;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }
}
export interface ObjectAntivirusProfileNntp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfileNntpToTerraform(struct?: ObjectAntivirusProfileNntpOutputReference | ObjectAntivirusProfileNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfileNntpToHclTerraform(struct?: ObjectAntivirusProfileNntpOutputReference | ObjectAntivirusProfileNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileNntpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileNntp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileNntp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._emulator = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._emulator = value.emulator;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: true, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: true, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}
export interface ObjectAntivirusProfileOutbreakPrevention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#ftgd_service ObjectAntivirusProfile#ftgd_service}
  */
  readonly ftgdService?: string;
}

export function objectAntivirusProfileOutbreakPreventionToTerraform(struct?: ObjectAntivirusProfileOutbreakPreventionOutputReference | ObjectAntivirusProfileOutbreakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    ftgd_service: cdktf.stringToTerraform(struct!.ftgdService),
  }
}


export function objectAntivirusProfileOutbreakPreventionToHclTerraform(struct?: ObjectAntivirusProfileOutbreakPreventionOutputReference | ObjectAntivirusProfileOutbreakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftgd_service: {
      value: cdktf.stringToHclTerraform(struct!.ftgdService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileOutbreakPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileOutbreakPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._ftgdService !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftgdService = this._ftgdService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileOutbreakPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalBlocklist = undefined;
      this._ftgdService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalBlocklist = value.externalBlocklist;
      this._ftgdService = value.ftgdService;
    }
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // ftgd_service - computed: true, optional: true, required: false
  private _ftgdService?: string; 
  public get ftgdService() {
    return this.getStringAttribute('ftgd_service');
  }
  public set ftgdService(value: string) {
    this._ftgdService = value;
  }
  public resetFtgdService() {
    this._ftgdService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftgdServiceInput() {
    return this._ftgdService;
  }
}
export interface ObjectAntivirusProfilePop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#content_disarm ObjectAntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#executables ObjectAntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfilePop3ToTerraform(struct?: ObjectAntivirusProfilePop3OutputReference | ObjectAntivirusProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfilePop3ToHclTerraform(struct?: ObjectAntivirusProfilePop3OutputReference | ObjectAntivirusProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_disarm: {
      value: cdktf.stringToHclTerraform(struct!.contentDisarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executables: {
      value: cdktf.stringToHclTerraform(struct!.executables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfilePop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfilePop3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._contentDisarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisarm = this._contentDisarm;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._executables !== undefined) {
      hasAnyValues = true;
      internalValueResult.executables = this._executables;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfilePop3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._contentDisarm = undefined;
      this._emulator = undefined;
      this._executables = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._contentDisarm = value.contentDisarm;
      this._emulator = value.emulator;
      this._executables = value.executables;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: true, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // content_disarm - computed: true, optional: true, required: false
  private _contentDisarm?: string; 
  public get contentDisarm() {
    return this.getStringAttribute('content_disarm');
  }
  public set contentDisarm(value: string) {
    this._contentDisarm = value;
  }
  public resetContentDisarm() {
    this._contentDisarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDisarmInput() {
    return this._contentDisarm;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // executables - computed: true, optional: true, required: false
  private _executables?: string; 
  public get executables() {
    return this.getStringAttribute('executables');
  }
  public set executables(value: string) {
    this._executables = value;
  }
  public resetExecutables() {
    this._executables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executablesInput() {
    return this._executables;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: true, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}
export interface ObjectAntivirusProfileSmb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
}

export function objectAntivirusProfileSmbToTerraform(struct?: ObjectAntivirusProfileSmbOutputReference | ObjectAntivirusProfileSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
  }
}


export function objectAntivirusProfileSmbToHclTerraform(struct?: ObjectAntivirusProfileSmbOutputReference | ObjectAntivirusProfileSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileSmbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileSmb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileSmb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._emulator = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._emulator = value.emulator;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // emulator - computed: false, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: false, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }
}
export interface ObjectAntivirusProfileSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#content_disarm ObjectAntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#executables ObjectAntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfileSmtpToTerraform(struct?: ObjectAntivirusProfileSmtpOutputReference | ObjectAntivirusProfileSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfileSmtpToHclTerraform(struct?: ObjectAntivirusProfileSmtpOutputReference | ObjectAntivirusProfileSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_disarm: {
      value: cdktf.stringToHclTerraform(struct!.contentDisarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executables: {
      value: cdktf.stringToHclTerraform(struct!.executables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._contentDisarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisarm = this._contentDisarm;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._executables !== undefined) {
      hasAnyValues = true;
      internalValueResult.executables = this._executables;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._contentDisarm = undefined;
      this._emulator = undefined;
      this._executables = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._contentDisarm = value.contentDisarm;
      this._emulator = value.emulator;
      this._executables = value.executables;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: true, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // content_disarm - computed: true, optional: true, required: false
  private _contentDisarm?: string; 
  public get contentDisarm() {
    return this.getStringAttribute('content_disarm');
  }
  public set contentDisarm(value: string) {
    this._contentDisarm = value;
  }
  public resetContentDisarm() {
    this._contentDisarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDisarmInput() {
    return this._contentDisarm;
  }

  // emulator - computed: true, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // executables - computed: true, optional: true, required: false
  private _executables?: string; 
  public get executables() {
    return this.getStringAttribute('executables');
  }
  public set executables(value: string) {
    this._executables = value;
  }
  public resetExecutables() {
    this._executables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executablesInput() {
    return this._executables;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: true, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: true, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: true, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}
export interface ObjectAntivirusProfileSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_block ObjectAntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#archive_log ObjectAntivirusProfile#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#av_scan ObjectAntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#emulator ObjectAntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#external_blocklist ObjectAntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortiai ObjectAntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortindr ObjectAntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#fortisandbox ObjectAntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#malware_stream ObjectAntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#options ObjectAntivirusProfile#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#outbreak_prevention ObjectAntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#quarantine ObjectAntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function objectAntivirusProfileSshToTerraform(struct?: ObjectAntivirusProfileSshOutputReference | ObjectAntivirusProfileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveBlock),
    archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function objectAntivirusProfileSshToHclTerraform(struct?: ObjectAntivirusProfileSshOutputReference | ObjectAntivirusProfileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveBlock),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    archive_log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveLog),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    av_scan: {
      value: cdktf.stringToHclTerraform(struct!.avScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emulator: {
      value: cdktf.stringToHclTerraform(struct!.emulator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_blocklist: {
      value: cdktf.stringToHclTerraform(struct!.externalBlocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiai: {
      value: cdktf.stringToHclTerraform(struct!.fortiai),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortindr: {
      value: cdktf.stringToHclTerraform(struct!.fortindr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortisandbox: {
      value: cdktf.stringToHclTerraform(struct!.fortisandbox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malware_stream: {
      value: cdktf.stringToHclTerraform(struct!.malwareStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbreak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.outbreakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quarantine: {
      value: cdktf.stringToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectAntivirusProfileSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectAntivirusProfileSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveBlock = this._archiveBlock;
    }
    if (this._archiveLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveLog = this._archiveLog;
    }
    if (this._avScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.avScan = this._avScan;
    }
    if (this._emulator !== undefined) {
      hasAnyValues = true;
      internalValueResult.emulator = this._emulator;
    }
    if (this._externalBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalBlocklist = this._externalBlocklist;
    }
    if (this._fortiai !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiai = this._fortiai;
    }
    if (this._fortindr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortindr = this._fortindr;
    }
    if (this._fortisandbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortisandbox = this._fortisandbox;
    }
    if (this._malwareStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareStream = this._malwareStream;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._outbreakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbreakPrevention = this._outbreakPrevention;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectAntivirusProfileSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
      this._avScan = undefined;
      this._emulator = undefined;
      this._externalBlocklist = undefined;
      this._fortiai = undefined;
      this._fortindr = undefined;
      this._fortisandbox = undefined;
      this._malwareStream = undefined;
      this._options = undefined;
      this._outbreakPrevention = undefined;
      this._quarantine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveBlock = value.archiveBlock;
      this._archiveLog = value.archiveLog;
      this._avScan = value.avScan;
      this._emulator = value.emulator;
      this._externalBlocklist = value.externalBlocklist;
      this._fortiai = value.fortiai;
      this._fortindr = value.fortindr;
      this._fortisandbox = value.fortisandbox;
      this._malwareStream = value.malwareStream;
      this._options = value.options;
      this._outbreakPrevention = value.outbreakPrevention;
      this._quarantine = value.quarantine;
    }
  }

  // archive_block - computed: true, optional: true, required: false
  private _archiveBlock?: string[]; 
  public get archiveBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_block'));
  }
  public set archiveBlock(value: string[]) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: true, optional: true, required: false
  private _archiveLog?: string[]; 
  public get archiveLog() {
    return cdktf.Fn.tolist(this.getListAttribute('archive_log'));
  }
  public set archiveLog(value: string[]) {
    this._archiveLog = value;
  }
  public resetArchiveLog() {
    this._archiveLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveLogInput() {
    return this._archiveLog;
  }

  // av_scan - computed: false, optional: true, required: false
  private _avScan?: string; 
  public get avScan() {
    return this.getStringAttribute('av_scan');
  }
  public set avScan(value: string) {
    this._avScan = value;
  }
  public resetAvScan() {
    this._avScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avScanInput() {
    return this._avScan;
  }

  // emulator - computed: false, optional: true, required: false
  private _emulator?: string; 
  public get emulator() {
    return this.getStringAttribute('emulator');
  }
  public set emulator(value: string) {
    this._emulator = value;
  }
  public resetEmulator() {
    this._emulator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatorInput() {
    return this._emulator;
  }

  // external_blocklist - computed: false, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // fortiai - computed: false, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // fortindr - computed: false, optional: true, required: false
  private _fortindr?: string; 
  public get fortindr() {
    return this.getStringAttribute('fortindr');
  }
  public set fortindr(value: string) {
    this._fortindr = value;
  }
  public resetFortindr() {
    this._fortindr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrInput() {
    return this._fortindr;
  }

  // fortisandbox - computed: false, optional: true, required: false
  private _fortisandbox?: string; 
  public get fortisandbox() {
    return this.getStringAttribute('fortisandbox');
  }
  public set fortisandbox(value: string) {
    this._fortisandbox = value;
  }
  public resetFortisandbox() {
    this._fortisandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxInput() {
    return this._fortisandbox;
  }

  // malware_stream - computed: false, optional: true, required: false
  private _malwareStream?: string; 
  public get malwareStream() {
    return this.getStringAttribute('malware_stream');
  }
  public set malwareStream(value: string) {
    this._malwareStream = value;
  }
  public resetMalwareStream() {
    this._malwareStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareStreamInput() {
    return this._malwareStream;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // outbreak_prevention - computed: false, optional: true, required: false
  private _outbreakPrevention?: string; 
  public get outbreakPrevention() {
    return this.getStringAttribute('outbreak_prevention');
  }
  public set outbreakPrevention(value: string) {
    this._outbreakPrevention = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention;
  }

  // quarantine - computed: false, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile fortimanager_object_antivirus_profile}
*/
export class ObjectAntivirusProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_antivirus_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectAntivirusProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectAntivirusProfile to import
  * @param importFromId The id of the existing ObjectAntivirusProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectAntivirusProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_antivirus_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile fortimanager_object_antivirus_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectAntivirusProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectAntivirusProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_antivirus_profile',
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
    this._analyticsAcceptFiletype = config.analyticsAcceptFiletype;
    this._analyticsBlFiletype = config.analyticsBlFiletype;
    this._analyticsDb = config.analyticsDb;
    this._analyticsIgnoreFiletype = config.analyticsIgnoreFiletype;
    this._analyticsMaxUpload = config.analyticsMaxUpload;
    this._analyticsWlFiletype = config.analyticsWlFiletype;
    this._avBlockLog = config.avBlockLog;
    this._avVirusLog = config.avVirusLog;
    this._comment = config.comment;
    this._emsThreatFeed = config.emsThreatFeed;
    this._extendedLog = config.extendedLog;
    this._externalBlocklist = config.externalBlocklist;
    this._externalBlocklistArchiveScan = config.externalBlocklistArchiveScan;
    this._externalBlocklistEnableAll = config.externalBlocklistEnableAll;
    this._featureSet = config.featureSet;
    this._fortiaiErrorAction = config.fortiaiErrorAction;
    this._fortiaiTimeoutAction = config.fortiaiTimeoutAction;
    this._fortindrErrorAction = config.fortindrErrorAction;
    this._fortindrTimeoutAction = config.fortindrTimeoutAction;
    this._fortisandboxErrorAction = config.fortisandboxErrorAction;
    this._fortisandboxMaxUpload = config.fortisandboxMaxUpload;
    this._fortisandboxMode = config.fortisandboxMode;
    this._fortisandboxTimeoutAction = config.fortisandboxTimeoutAction;
    this._ftgdAnalytics = config.ftgdAnalytics;
    this._id = config.id;
    this._inspectionMode = config.inspectionMode;
    this._mobileMalwareDb = config.mobileMalwareDb;
    this._name = config.name;
    this._outbreakPreventionArchiveScan = config.outbreakPreventionArchiveScan;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scanMode = config.scanMode;
    this._scopetype = config.scopetype;
    this._cifs.internalValue = config.cifs;
    this._contentDisarm.internalValue = config.contentDisarm;
    this._ftp.internalValue = config.ftp;
    this._http.internalValue = config.http;
    this._imap.internalValue = config.imap;
    this._mapi.internalValue = config.mapi;
    this._nacQuar.internalValue = config.nacQuar;
    this._nntp.internalValue = config.nntp;
    this._outbreakPrevention.internalValue = config.outbreakPrevention;
    this._pop3.internalValue = config.pop3;
    this._smb.internalValue = config.smb;
    this._smtp.internalValue = config.smtp;
    this._ssh.internalValue = config.ssh;
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

  // analytics_accept_filetype - computed: false, optional: true, required: false
  private _analyticsAcceptFiletype?: string; 
  public get analyticsAcceptFiletype() {
    return this.getStringAttribute('analytics_accept_filetype');
  }
  public set analyticsAcceptFiletype(value: string) {
    this._analyticsAcceptFiletype = value;
  }
  public resetAnalyticsAcceptFiletype() {
    this._analyticsAcceptFiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsAcceptFiletypeInput() {
    return this._analyticsAcceptFiletype;
  }

  // analytics_bl_filetype - computed: false, optional: true, required: false
  private _analyticsBlFiletype?: string; 
  public get analyticsBlFiletype() {
    return this.getStringAttribute('analytics_bl_filetype');
  }
  public set analyticsBlFiletype(value: string) {
    this._analyticsBlFiletype = value;
  }
  public resetAnalyticsBlFiletype() {
    this._analyticsBlFiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsBlFiletypeInput() {
    return this._analyticsBlFiletype;
  }

  // analytics_db - computed: true, optional: true, required: false
  private _analyticsDb?: string; 
  public get analyticsDb() {
    return this.getStringAttribute('analytics_db');
  }
  public set analyticsDb(value: string) {
    this._analyticsDb = value;
  }
  public resetAnalyticsDb() {
    this._analyticsDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsDbInput() {
    return this._analyticsDb;
  }

  // analytics_ignore_filetype - computed: false, optional: true, required: false
  private _analyticsIgnoreFiletype?: string; 
  public get analyticsIgnoreFiletype() {
    return this.getStringAttribute('analytics_ignore_filetype');
  }
  public set analyticsIgnoreFiletype(value: string) {
    this._analyticsIgnoreFiletype = value;
  }
  public resetAnalyticsIgnoreFiletype() {
    this._analyticsIgnoreFiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsIgnoreFiletypeInput() {
    return this._analyticsIgnoreFiletype;
  }

  // analytics_max_upload - computed: false, optional: true, required: false
  private _analyticsMaxUpload?: number; 
  public get analyticsMaxUpload() {
    return this.getNumberAttribute('analytics_max_upload');
  }
  public set analyticsMaxUpload(value: number) {
    this._analyticsMaxUpload = value;
  }
  public resetAnalyticsMaxUpload() {
    this._analyticsMaxUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsMaxUploadInput() {
    return this._analyticsMaxUpload;
  }

  // analytics_wl_filetype - computed: false, optional: true, required: false
  private _analyticsWlFiletype?: string; 
  public get analyticsWlFiletype() {
    return this.getStringAttribute('analytics_wl_filetype');
  }
  public set analyticsWlFiletype(value: string) {
    this._analyticsWlFiletype = value;
  }
  public resetAnalyticsWlFiletype() {
    this._analyticsWlFiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsWlFiletypeInput() {
    return this._analyticsWlFiletype;
  }

  // av_block_log - computed: true, optional: true, required: false
  private _avBlockLog?: string; 
  public get avBlockLog() {
    return this.getStringAttribute('av_block_log');
  }
  public set avBlockLog(value: string) {
    this._avBlockLog = value;
  }
  public resetAvBlockLog() {
    this._avBlockLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avBlockLogInput() {
    return this._avBlockLog;
  }

  // av_virus_log - computed: true, optional: true, required: false
  private _avVirusLog?: string; 
  public get avVirusLog() {
    return this.getStringAttribute('av_virus_log');
  }
  public set avVirusLog(value: string) {
    this._avVirusLog = value;
  }
  public resetAvVirusLog() {
    this._avVirusLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avVirusLogInput() {
    return this._avVirusLog;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ems_threat_feed - computed: true, optional: true, required: false
  private _emsThreatFeed?: string; 
  public get emsThreatFeed() {
    return this.getStringAttribute('ems_threat_feed');
  }
  public set emsThreatFeed(value: string) {
    this._emsThreatFeed = value;
  }
  public resetEmsThreatFeed() {
    this._emsThreatFeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsThreatFeedInput() {
    return this._emsThreatFeed;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string[]; 
  public get externalBlocklist() {
    return cdktf.Fn.tolist(this.getListAttribute('external_blocklist'));
  }
  public set externalBlocklist(value: string[]) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // external_blocklist_archive_scan - computed: true, optional: true, required: false
  private _externalBlocklistArchiveScan?: string; 
  public get externalBlocklistArchiveScan() {
    return this.getStringAttribute('external_blocklist_archive_scan');
  }
  public set externalBlocklistArchiveScan(value: string) {
    this._externalBlocklistArchiveScan = value;
  }
  public resetExternalBlocklistArchiveScan() {
    this._externalBlocklistArchiveScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistArchiveScanInput() {
    return this._externalBlocklistArchiveScan;
  }

  // external_blocklist_enable_all - computed: true, optional: true, required: false
  private _externalBlocklistEnableAll?: string; 
  public get externalBlocklistEnableAll() {
    return this.getStringAttribute('external_blocklist_enable_all');
  }
  public set externalBlocklistEnableAll(value: string) {
    this._externalBlocklistEnableAll = value;
  }
  public resetExternalBlocklistEnableAll() {
    this._externalBlocklistEnableAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistEnableAllInput() {
    return this._externalBlocklistEnableAll;
  }

  // feature_set - computed: true, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }

  // fortiai_error_action - computed: true, optional: true, required: false
  private _fortiaiErrorAction?: string; 
  public get fortiaiErrorAction() {
    return this.getStringAttribute('fortiai_error_action');
  }
  public set fortiaiErrorAction(value: string) {
    this._fortiaiErrorAction = value;
  }
  public resetFortiaiErrorAction() {
    this._fortiaiErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiErrorActionInput() {
    return this._fortiaiErrorAction;
  }

  // fortiai_timeout_action - computed: true, optional: true, required: false
  private _fortiaiTimeoutAction?: string; 
  public get fortiaiTimeoutAction() {
    return this.getStringAttribute('fortiai_timeout_action');
  }
  public set fortiaiTimeoutAction(value: string) {
    this._fortiaiTimeoutAction = value;
  }
  public resetFortiaiTimeoutAction() {
    this._fortiaiTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiTimeoutActionInput() {
    return this._fortiaiTimeoutAction;
  }

  // fortindr_error_action - computed: true, optional: true, required: false
  private _fortindrErrorAction?: string; 
  public get fortindrErrorAction() {
    return this.getStringAttribute('fortindr_error_action');
  }
  public set fortindrErrorAction(value: string) {
    this._fortindrErrorAction = value;
  }
  public resetFortindrErrorAction() {
    this._fortindrErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrErrorActionInput() {
    return this._fortindrErrorAction;
  }

  // fortindr_timeout_action - computed: true, optional: true, required: false
  private _fortindrTimeoutAction?: string; 
  public get fortindrTimeoutAction() {
    return this.getStringAttribute('fortindr_timeout_action');
  }
  public set fortindrTimeoutAction(value: string) {
    this._fortindrTimeoutAction = value;
  }
  public resetFortindrTimeoutAction() {
    this._fortindrTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortindrTimeoutActionInput() {
    return this._fortindrTimeoutAction;
  }

  // fortisandbox_error_action - computed: true, optional: true, required: false
  private _fortisandboxErrorAction?: string; 
  public get fortisandboxErrorAction() {
    return this.getStringAttribute('fortisandbox_error_action');
  }
  public set fortisandboxErrorAction(value: string) {
    this._fortisandboxErrorAction = value;
  }
  public resetFortisandboxErrorAction() {
    this._fortisandboxErrorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxErrorActionInput() {
    return this._fortisandboxErrorAction;
  }

  // fortisandbox_max_upload - computed: true, optional: true, required: false
  private _fortisandboxMaxUpload?: number; 
  public get fortisandboxMaxUpload() {
    return this.getNumberAttribute('fortisandbox_max_upload');
  }
  public set fortisandboxMaxUpload(value: number) {
    this._fortisandboxMaxUpload = value;
  }
  public resetFortisandboxMaxUpload() {
    this._fortisandboxMaxUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxMaxUploadInput() {
    return this._fortisandboxMaxUpload;
  }

  // fortisandbox_mode - computed: true, optional: true, required: false
  private _fortisandboxMode?: string; 
  public get fortisandboxMode() {
    return this.getStringAttribute('fortisandbox_mode');
  }
  public set fortisandboxMode(value: string) {
    this._fortisandboxMode = value;
  }
  public resetFortisandboxMode() {
    this._fortisandboxMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxModeInput() {
    return this._fortisandboxMode;
  }

  // fortisandbox_timeout_action - computed: true, optional: true, required: false
  private _fortisandboxTimeoutAction?: string; 
  public get fortisandboxTimeoutAction() {
    return this.getStringAttribute('fortisandbox_timeout_action');
  }
  public set fortisandboxTimeoutAction(value: string) {
    this._fortisandboxTimeoutAction = value;
  }
  public resetFortisandboxTimeoutAction() {
    this._fortisandboxTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortisandboxTimeoutActionInput() {
    return this._fortisandboxTimeoutAction;
  }

  // ftgd_analytics - computed: true, optional: true, required: false
  private _ftgdAnalytics?: string; 
  public get ftgdAnalytics() {
    return this.getStringAttribute('ftgd_analytics');
  }
  public set ftgdAnalytics(value: string) {
    this._ftgdAnalytics = value;
  }
  public resetFtgdAnalytics() {
    this._ftgdAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftgdAnalyticsInput() {
    return this._ftgdAnalytics;
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

  // mobile_malware_db - computed: true, optional: true, required: false
  private _mobileMalwareDb?: string; 
  public get mobileMalwareDb() {
    return this.getStringAttribute('mobile_malware_db');
  }
  public set mobileMalwareDb(value: string) {
    this._mobileMalwareDb = value;
  }
  public resetMobileMalwareDb() {
    this._mobileMalwareDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileMalwareDbInput() {
    return this._mobileMalwareDb;
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

  // outbreak_prevention_archive_scan - computed: true, optional: true, required: false
  private _outbreakPreventionArchiveScan?: string; 
  public get outbreakPreventionArchiveScan() {
    return this.getStringAttribute('outbreak_prevention_archive_scan');
  }
  public set outbreakPreventionArchiveScan(value: string) {
    this._outbreakPreventionArchiveScan = value;
  }
  public resetOutbreakPreventionArchiveScan() {
    this._outbreakPreventionArchiveScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionArchiveScanInput() {
    return this._outbreakPreventionArchiveScan;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // scan_mode - computed: false, optional: true, required: false
  private _scanMode?: string; 
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
  public set scanMode(value: string) {
    this._scanMode = value;
  }
  public resetScanMode() {
    this._scanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanModeInput() {
    return this._scanMode;
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

  // cifs - computed: false, optional: true, required: false
  private _cifs = new ObjectAntivirusProfileCifsOutputReference(this, "cifs");
  public get cifs() {
    return this._cifs;
  }
  public putCifs(value: ObjectAntivirusProfileCifs) {
    this._cifs.internalValue = value;
  }
  public resetCifs() {
    this._cifs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsInput() {
    return this._cifs.internalValue;
  }

  // content_disarm - computed: false, optional: true, required: false
  private _contentDisarm = new ObjectAntivirusProfileContentDisarmOutputReference(this, "content_disarm");
  public get contentDisarm() {
    return this._contentDisarm;
  }
  public putContentDisarm(value: ObjectAntivirusProfileContentDisarm) {
    this._contentDisarm.internalValue = value;
  }
  public resetContentDisarm() {
    this._contentDisarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDisarmInput() {
    return this._contentDisarm.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new ObjectAntivirusProfileFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: ObjectAntivirusProfileFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ObjectAntivirusProfileHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ObjectAntivirusProfileHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // imap - computed: false, optional: true, required: false
  private _imap = new ObjectAntivirusProfileImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: ObjectAntivirusProfileImap) {
    this._imap.internalValue = value;
  }
  public resetImap() {
    this._imap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap.internalValue;
  }

  // mapi - computed: false, optional: true, required: false
  private _mapi = new ObjectAntivirusProfileMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: ObjectAntivirusProfileMapi) {
    this._mapi.internalValue = value;
  }
  public resetMapi() {
    this._mapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapiInput() {
    return this._mapi.internalValue;
  }

  // nac_quar - computed: false, optional: true, required: false
  private _nacQuar = new ObjectAntivirusProfileNacQuarOutputReference(this, "nac_quar");
  public get nacQuar() {
    return this._nacQuar;
  }
  public putNacQuar(value: ObjectAntivirusProfileNacQuar) {
    this._nacQuar.internalValue = value;
  }
  public resetNacQuar() {
    this._nacQuar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacQuarInput() {
    return this._nacQuar.internalValue;
  }

  // nntp - computed: false, optional: true, required: false
  private _nntp = new ObjectAntivirusProfileNntpOutputReference(this, "nntp");
  public get nntp() {
    return this._nntp;
  }
  public putNntp(value: ObjectAntivirusProfileNntp) {
    this._nntp.internalValue = value;
  }
  public resetNntp() {
    this._nntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nntpInput() {
    return this._nntp.internalValue;
  }

  // outbreak_prevention - computed: false, optional: true, required: false
  private _outbreakPrevention = new ObjectAntivirusProfileOutbreakPreventionOutputReference(this, "outbreak_prevention");
  public get outbreakPrevention() {
    return this._outbreakPrevention;
  }
  public putOutbreakPrevention(value: ObjectAntivirusProfileOutbreakPrevention) {
    this._outbreakPrevention.internalValue = value;
  }
  public resetOutbreakPrevention() {
    this._outbreakPrevention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbreakPreventionInput() {
    return this._outbreakPrevention.internalValue;
  }

  // pop3 - computed: false, optional: true, required: false
  private _pop3 = new ObjectAntivirusProfilePop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: ObjectAntivirusProfilePop3) {
    this._pop3.internalValue = value;
  }
  public resetPop3() {
    this._pop3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3.internalValue;
  }

  // smb - computed: false, optional: true, required: false
  private _smb = new ObjectAntivirusProfileSmbOutputReference(this, "smb");
  public get smb() {
    return this._smb;
  }
  public putSmb(value: ObjectAntivirusProfileSmb) {
    this._smb.internalValue = value;
  }
  public resetSmb() {
    this._smb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbInput() {
    return this._smb.internalValue;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp = new ObjectAntivirusProfileSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: ObjectAntivirusProfileSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new ObjectAntivirusProfileSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: ObjectAntivirusProfileSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      analytics_accept_filetype: cdktf.stringToTerraform(this._analyticsAcceptFiletype),
      analytics_bl_filetype: cdktf.stringToTerraform(this._analyticsBlFiletype),
      analytics_db: cdktf.stringToTerraform(this._analyticsDb),
      analytics_ignore_filetype: cdktf.stringToTerraform(this._analyticsIgnoreFiletype),
      analytics_max_upload: cdktf.numberToTerraform(this._analyticsMaxUpload),
      analytics_wl_filetype: cdktf.stringToTerraform(this._analyticsWlFiletype),
      av_block_log: cdktf.stringToTerraform(this._avBlockLog),
      av_virus_log: cdktf.stringToTerraform(this._avVirusLog),
      comment: cdktf.stringToTerraform(this._comment),
      ems_threat_feed: cdktf.stringToTerraform(this._emsThreatFeed),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      external_blocklist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalBlocklist),
      external_blocklist_archive_scan: cdktf.stringToTerraform(this._externalBlocklistArchiveScan),
      external_blocklist_enable_all: cdktf.stringToTerraform(this._externalBlocklistEnableAll),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      fortiai_error_action: cdktf.stringToTerraform(this._fortiaiErrorAction),
      fortiai_timeout_action: cdktf.stringToTerraform(this._fortiaiTimeoutAction),
      fortindr_error_action: cdktf.stringToTerraform(this._fortindrErrorAction),
      fortindr_timeout_action: cdktf.stringToTerraform(this._fortindrTimeoutAction),
      fortisandbox_error_action: cdktf.stringToTerraform(this._fortisandboxErrorAction),
      fortisandbox_max_upload: cdktf.numberToTerraform(this._fortisandboxMaxUpload),
      fortisandbox_mode: cdktf.stringToTerraform(this._fortisandboxMode),
      fortisandbox_timeout_action: cdktf.stringToTerraform(this._fortisandboxTimeoutAction),
      ftgd_analytics: cdktf.stringToTerraform(this._ftgdAnalytics),
      id: cdktf.stringToTerraform(this._id),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      mobile_malware_db: cdktf.stringToTerraform(this._mobileMalwareDb),
      name: cdktf.stringToTerraform(this._name),
      outbreak_prevention_archive_scan: cdktf.stringToTerraform(this._outbreakPreventionArchiveScan),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scan_mode: cdktf.stringToTerraform(this._scanMode),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      cifs: objectAntivirusProfileCifsToTerraform(this._cifs.internalValue),
      content_disarm: objectAntivirusProfileContentDisarmToTerraform(this._contentDisarm.internalValue),
      ftp: objectAntivirusProfileFtpToTerraform(this._ftp.internalValue),
      http: objectAntivirusProfileHttpToTerraform(this._http.internalValue),
      imap: objectAntivirusProfileImapToTerraform(this._imap.internalValue),
      mapi: objectAntivirusProfileMapiToTerraform(this._mapi.internalValue),
      nac_quar: objectAntivirusProfileNacQuarToTerraform(this._nacQuar.internalValue),
      nntp: objectAntivirusProfileNntpToTerraform(this._nntp.internalValue),
      outbreak_prevention: objectAntivirusProfileOutbreakPreventionToTerraform(this._outbreakPrevention.internalValue),
      pop3: objectAntivirusProfilePop3ToTerraform(this._pop3.internalValue),
      smb: objectAntivirusProfileSmbToTerraform(this._smb.internalValue),
      smtp: objectAntivirusProfileSmtpToTerraform(this._smtp.internalValue),
      ssh: objectAntivirusProfileSshToTerraform(this._ssh.internalValue),
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
      analytics_accept_filetype: {
        value: cdktf.stringToHclTerraform(this._analyticsAcceptFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_bl_filetype: {
        value: cdktf.stringToHclTerraform(this._analyticsBlFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_db: {
        value: cdktf.stringToHclTerraform(this._analyticsDb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_ignore_filetype: {
        value: cdktf.stringToHclTerraform(this._analyticsIgnoreFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_max_upload: {
        value: cdktf.numberToHclTerraform(this._analyticsMaxUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      analytics_wl_filetype: {
        value: cdktf.stringToHclTerraform(this._analyticsWlFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_block_log: {
        value: cdktf.stringToHclTerraform(this._avBlockLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      av_virus_log: {
        value: cdktf.stringToHclTerraform(this._avVirusLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ems_threat_feed: {
        value: cdktf.stringToHclTerraform(this._emsThreatFeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_blocklist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalBlocklist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_blocklist_archive_scan: {
        value: cdktf.stringToHclTerraform(this._externalBlocklistArchiveScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_blocklist_enable_all: {
        value: cdktf.stringToHclTerraform(this._externalBlocklistEnableAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiai_error_action: {
        value: cdktf.stringToHclTerraform(this._fortiaiErrorAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiai_timeout_action: {
        value: cdktf.stringToHclTerraform(this._fortiaiTimeoutAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortindr_error_action: {
        value: cdktf.stringToHclTerraform(this._fortindrErrorAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortindr_timeout_action: {
        value: cdktf.stringToHclTerraform(this._fortindrTimeoutAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortisandbox_error_action: {
        value: cdktf.stringToHclTerraform(this._fortisandboxErrorAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortisandbox_max_upload: {
        value: cdktf.numberToHclTerraform(this._fortisandboxMaxUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortisandbox_mode: {
        value: cdktf.stringToHclTerraform(this._fortisandboxMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortisandbox_timeout_action: {
        value: cdktf.stringToHclTerraform(this._fortisandboxTimeoutAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftgd_analytics: {
        value: cdktf.stringToHclTerraform(this._ftgdAnalytics),
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
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile_malware_db: {
        value: cdktf.stringToHclTerraform(this._mobileMalwareDb),
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
      outbreak_prevention_archive_scan: {
        value: cdktf.stringToHclTerraform(this._outbreakPreventionArchiveScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_mode: {
        value: cdktf.stringToHclTerraform(this._scanMode),
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
      cifs: {
        value: objectAntivirusProfileCifsToHclTerraform(this._cifs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileCifsList",
      },
      content_disarm: {
        value: objectAntivirusProfileContentDisarmToHclTerraform(this._contentDisarm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileContentDisarmList",
      },
      ftp: {
        value: objectAntivirusProfileFtpToHclTerraform(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileFtpList",
      },
      http: {
        value: objectAntivirusProfileHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileHttpList",
      },
      imap: {
        value: objectAntivirusProfileImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileImapList",
      },
      mapi: {
        value: objectAntivirusProfileMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileMapiList",
      },
      nac_quar: {
        value: objectAntivirusProfileNacQuarToHclTerraform(this._nacQuar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileNacQuarList",
      },
      nntp: {
        value: objectAntivirusProfileNntpToHclTerraform(this._nntp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileNntpList",
      },
      outbreak_prevention: {
        value: objectAntivirusProfileOutbreakPreventionToHclTerraform(this._outbreakPrevention.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileOutbreakPreventionList",
      },
      pop3: {
        value: objectAntivirusProfilePop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfilePop3List",
      },
      smb: {
        value: objectAntivirusProfileSmbToHclTerraform(this._smb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileSmbList",
      },
      smtp: {
        value: objectAntivirusProfileSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileSmtpList",
      },
      ssh: {
        value: objectAntivirusProfileSshToHclTerraform(this._ssh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectAntivirusProfileSshList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
