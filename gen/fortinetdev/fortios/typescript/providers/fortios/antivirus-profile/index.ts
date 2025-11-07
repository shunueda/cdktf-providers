// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntivirusProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#analytics_accept_filetype AntivirusProfile#analytics_accept_filetype}
  */
  readonly analyticsAcceptFiletype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#analytics_bl_filetype AntivirusProfile#analytics_bl_filetype}
  */
  readonly analyticsBlFiletype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#analytics_db AntivirusProfile#analytics_db}
  */
  readonly analyticsDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#analytics_ignore_filetype AntivirusProfile#analytics_ignore_filetype}
  */
  readonly analyticsIgnoreFiletype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#analytics_max_upload AntivirusProfile#analytics_max_upload}
  */
  readonly analyticsMaxUpload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#analytics_wl_filetype AntivirusProfile#analytics_wl_filetype}
  */
  readonly analyticsWlFiletype?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_block_log AntivirusProfile#av_block_log}
  */
  readonly avBlockLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_virus_log AntivirusProfile#av_virus_log}
  */
  readonly avVirusLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#comment AntivirusProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#dynamic_sort_subtable AntivirusProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#ems_threat_feed AntivirusProfile#ems_threat_feed}
  */
  readonly emsThreatFeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#extended_log AntivirusProfile#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist_enable_all AntivirusProfile#external_blocklist_enable_all}
  */
  readonly externalBlocklistEnableAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#feature_set AntivirusProfile#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai_error_action AntivirusProfile#fortiai_error_action}
  */
  readonly fortiaiErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai_timeout_action AntivirusProfile#fortiai_timeout_action}
  */
  readonly fortiaiTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr_error_action AntivirusProfile#fortindr_error_action}
  */
  readonly fortindrErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr_timeout_action AntivirusProfile#fortindr_timeout_action}
  */
  readonly fortindrTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox_error_action AntivirusProfile#fortisandbox_error_action}
  */
  readonly fortisandboxErrorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox_max_upload AntivirusProfile#fortisandbox_max_upload}
  */
  readonly fortisandboxMaxUpload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox_mode AntivirusProfile#fortisandbox_mode}
  */
  readonly fortisandboxMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox_timeout_action AntivirusProfile#fortisandbox_timeout_action}
  */
  readonly fortisandboxTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#ftgd_analytics AntivirusProfile#ftgd_analytics}
  */
  readonly ftgdAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#get_all_tables AntivirusProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#id AntivirusProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#inspection_mode AntivirusProfile#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#mobile_malware_db AntivirusProfile#mobile_malware_db}
  */
  readonly mobileMalwareDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#name AntivirusProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention_archive_scan AntivirusProfile#outbreak_prevention_archive_scan}
  */
  readonly outbreakPreventionArchiveScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#replacemsg_group AntivirusProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#scan_mode AntivirusProfile#scan_mode}
  */
  readonly scanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#vdomparam AntivirusProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * cifs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#cifs AntivirusProfile#cifs}
  */
  readonly cifs?: AntivirusProfileCifs;
  /**
  * content_disarm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#content_disarm AntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: AntivirusProfileContentDisarm;
  /**
  * external_blocklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: AntivirusProfileExternalBlocklistStruct[] | cdktf.IResolvable;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#ftp AntivirusProfile#ftp}
  */
  readonly ftp?: AntivirusProfileFtp;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#http AntivirusProfile#http}
  */
  readonly http?: AntivirusProfileHttp;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#imap AntivirusProfile#imap}
  */
  readonly imap?: AntivirusProfileImap;
  /**
  * mapi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#mapi AntivirusProfile#mapi}
  */
  readonly mapi?: AntivirusProfileMapi;
  /**
  * nac_quar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#nac_quar AntivirusProfile#nac_quar}
  */
  readonly nacQuar?: AntivirusProfileNacQuar;
  /**
  * nntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#nntp AntivirusProfile#nntp}
  */
  readonly nntp?: AntivirusProfileNntp;
  /**
  * outbreak_prevention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: AntivirusProfileOutbreakPrevention;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pop3 AntivirusProfile#pop3}
  */
  readonly pop3?: AntivirusProfilePop3;
  /**
  * smb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#smb AntivirusProfile#smb}
  */
  readonly smb?: AntivirusProfileSmb;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#smtp AntivirusProfile#smtp}
  */
  readonly smtp?: AntivirusProfileSmtp;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#ssh AntivirusProfile#ssh}
  */
  readonly ssh?: AntivirusProfileSsh;
}
export interface AntivirusProfileCifs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfileCifsToTerraform(struct?: AntivirusProfileCifsOutputReference | AntivirusProfileCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfileCifsToHclTerraform(struct?: AntivirusProfileCifsOutputReference | AntivirusProfileCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileCifsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileCifs | undefined {
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

  public set internalValue(value: AntivirusProfileCifs | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileContentDisarm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#analytics_suspicious AntivirusProfile#analytics_suspicious}
  */
  readonly analyticsSuspicious?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#cover_page AntivirusProfile#cover_page}
  */
  readonly coverPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#detect_only AntivirusProfile#detect_only}
  */
  readonly detectOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#error_action AntivirusProfile#error_action}
  */
  readonly errorAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#office_action AntivirusProfile#office_action}
  */
  readonly officeAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#office_dde AntivirusProfile#office_dde}
  */
  readonly officeDde?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#office_embed AntivirusProfile#office_embed}
  */
  readonly officeEmbed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#office_hylink AntivirusProfile#office_hylink}
  */
  readonly officeHylink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#office_linked AntivirusProfile#office_linked}
  */
  readonly officeLinked?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#office_macro AntivirusProfile#office_macro}
  */
  readonly officeMacro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#original_file_destination AntivirusProfile#original_file_destination}
  */
  readonly originalFileDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_act_form AntivirusProfile#pdf_act_form}
  */
  readonly pdfActForm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_act_gotor AntivirusProfile#pdf_act_gotor}
  */
  readonly pdfActGotor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_act_java AntivirusProfile#pdf_act_java}
  */
  readonly pdfActJava?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_act_launch AntivirusProfile#pdf_act_launch}
  */
  readonly pdfActLaunch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_act_movie AntivirusProfile#pdf_act_movie}
  */
  readonly pdfActMovie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_act_sound AntivirusProfile#pdf_act_sound}
  */
  readonly pdfActSound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_embedfile AntivirusProfile#pdf_embedfile}
  */
  readonly pdfEmbedfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_hyperlink AntivirusProfile#pdf_hyperlink}
  */
  readonly pdfHyperlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#pdf_javacode AntivirusProfile#pdf_javacode}
  */
  readonly pdfJavacode?: string;
}

export function antivirusProfileContentDisarmToTerraform(struct?: AntivirusProfileContentDisarmOutputReference | AntivirusProfileContentDisarm): any {
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


export function antivirusProfileContentDisarmToHclTerraform(struct?: AntivirusProfileContentDisarmOutputReference | AntivirusProfileContentDisarm): any {
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

export class AntivirusProfileContentDisarmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileContentDisarm | undefined {
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

  public set internalValue(value: AntivirusProfileContentDisarm | undefined) {
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

  // analytics_suspicious - computed: true, optional: true, required: false
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
export interface AntivirusProfileExternalBlocklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#name AntivirusProfile#name}
  */
  readonly name?: string;
}

export function antivirusProfileExternalBlocklistStructToTerraform(struct?: AntivirusProfileExternalBlocklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antivirusProfileExternalBlocklistStructToHclTerraform(struct?: AntivirusProfileExternalBlocklistStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntivirusProfileExternalBlocklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntivirusProfileExternalBlocklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntivirusProfileExternalBlocklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class AntivirusProfileExternalBlocklistStructList extends cdktf.ComplexList {
  public internalValue? : AntivirusProfileExternalBlocklistStruct[] | cdktf.IResolvable

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
  public get(index: number): AntivirusProfileExternalBlocklistStructOutputReference {
    return new AntivirusProfileExternalBlocklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntivirusProfileFtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfileFtpToTerraform(struct?: AntivirusProfileFtpOutputReference | AntivirusProfileFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfileFtpToHclTerraform(struct?: AntivirusProfileFtpOutputReference | AntivirusProfileFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileFtp | undefined {
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

  public set internalValue(value: AntivirusProfileFtp | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#content_disarm AntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#unknown_content_encoding AntivirusProfile#unknown_content_encoding}
  */
  readonly unknownContentEncoding?: string;
}

export function antivirusProfileHttpToTerraform(struct?: AntivirusProfileHttpOutputReference | AntivirusProfileHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
    unknown_content_encoding: cdktf.stringToTerraform(struct!.unknownContentEncoding),
  }
}


export function antivirusProfileHttpToHclTerraform(struct?: AntivirusProfileHttpOutputReference | AntivirusProfileHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileHttp | undefined {
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

  public set internalValue(value: AntivirusProfileHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveBlock = undefined;
      this._archiveLog = undefined;
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileImap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#content_disarm AntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#executables AntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfileImapToTerraform(struct?: AntivirusProfileImapOutputReference | AntivirusProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfileImapToHclTerraform(struct?: AntivirusProfileImapOutputReference | AntivirusProfileImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileImap | undefined {
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

  public set internalValue(value: AntivirusProfileImap | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileMapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#executables AntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfileMapiToTerraform(struct?: AntivirusProfileMapiOutputReference | AntivirusProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfileMapiToHclTerraform(struct?: AntivirusProfileMapiOutputReference | AntivirusProfileMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileMapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileMapi | undefined {
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

  public set internalValue(value: AntivirusProfileMapi | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileNacQuar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#expiry AntivirusProfile#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#infected AntivirusProfile#infected}
  */
  readonly infected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#log AntivirusProfile#log}
  */
  readonly log?: string;
}

export function antivirusProfileNacQuarToTerraform(struct?: AntivirusProfileNacQuarOutputReference | AntivirusProfileNacQuar): any {
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


export function antivirusProfileNacQuarToHclTerraform(struct?: AntivirusProfileNacQuarOutputReference | AntivirusProfileNacQuar): any {
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

export class AntivirusProfileNacQuarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileNacQuar | undefined {
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

  public set internalValue(value: AntivirusProfileNacQuar | undefined) {
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
export interface AntivirusProfileNntp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfileNntpToTerraform(struct?: AntivirusProfileNntpOutputReference | AntivirusProfileNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfileNntpToHclTerraform(struct?: AntivirusProfileNntpOutputReference | AntivirusProfileNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileNntpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileNntp | undefined {
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

  public set internalValue(value: AntivirusProfileNntp | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileOutbreakPrevention {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#ftgd_service AntivirusProfile#ftgd_service}
  */
  readonly ftgdService?: string;
}

export function antivirusProfileOutbreakPreventionToTerraform(struct?: AntivirusProfileOutbreakPreventionOutputReference | AntivirusProfileOutbreakPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    ftgd_service: cdktf.stringToTerraform(struct!.ftgdService),
  }
}


export function antivirusProfileOutbreakPreventionToHclTerraform(struct?: AntivirusProfileOutbreakPreventionOutputReference | AntivirusProfileOutbreakPrevention): any {
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

export class AntivirusProfileOutbreakPreventionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileOutbreakPrevention | undefined {
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

  public set internalValue(value: AntivirusProfileOutbreakPrevention | undefined) {
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
export interface AntivirusProfilePop3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#content_disarm AntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#executables AntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfilePop3ToTerraform(struct?: AntivirusProfilePop3OutputReference | AntivirusProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfilePop3ToHclTerraform(struct?: AntivirusProfilePop3OutputReference | AntivirusProfilePop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfilePop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfilePop3 | undefined {
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

  public set internalValue(value: AntivirusProfilePop3 | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileSmb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
}

export function antivirusProfileSmbToTerraform(struct?: AntivirusProfileSmbOutputReference | AntivirusProfileSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
  }
}


export function antivirusProfileSmbToHclTerraform(struct?: AntivirusProfileSmbOutputReference | AntivirusProfileSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileSmbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileSmb | undefined {
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

  public set internalValue(value: AntivirusProfileSmb | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileSmtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#content_disarm AntivirusProfile#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#executables AntivirusProfile#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfileSmtpToTerraform(struct?: AntivirusProfileSmtpOutputReference | AntivirusProfileSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    content_disarm: cdktf.stringToTerraform(struct!.contentDisarm),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    executables: cdktf.stringToTerraform(struct!.executables),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfileSmtpToHclTerraform(struct?: AntivirusProfileSmtpOutputReference | AntivirusProfileSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileSmtp | undefined {
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

  public set internalValue(value: AntivirusProfileSmtp | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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
export interface AntivirusProfileSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_block AntivirusProfile#archive_block}
  */
  readonly archiveBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#archive_log AntivirusProfile#archive_log}
  */
  readonly archiveLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#av_scan AntivirusProfile#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#emulator AntivirusProfile#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#external_blocklist AntivirusProfile#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortiai AntivirusProfile#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortindr AntivirusProfile#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#fortisandbox AntivirusProfile#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#malware_stream AntivirusProfile#malware_stream}
  */
  readonly malwareStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#options AntivirusProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#outbreak_prevention AntivirusProfile#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#quarantine AntivirusProfile#quarantine}
  */
  readonly quarantine?: string;
}

export function antivirusProfileSshToTerraform(struct?: AntivirusProfileSshOutputReference | AntivirusProfileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_block: cdktf.stringToTerraform(struct!.archiveBlock),
    archive_log: cdktf.stringToTerraform(struct!.archiveLog),
    av_scan: cdktf.stringToTerraform(struct!.avScan),
    emulator: cdktf.stringToTerraform(struct!.emulator),
    external_blocklist: cdktf.stringToTerraform(struct!.externalBlocklist),
    fortiai: cdktf.stringToTerraform(struct!.fortiai),
    fortindr: cdktf.stringToTerraform(struct!.fortindr),
    fortisandbox: cdktf.stringToTerraform(struct!.fortisandbox),
    malware_stream: cdktf.stringToTerraform(struct!.malwareStream),
    options: cdktf.stringToTerraform(struct!.options),
    outbreak_prevention: cdktf.stringToTerraform(struct!.outbreakPrevention),
    quarantine: cdktf.stringToTerraform(struct!.quarantine),
  }
}


export function antivirusProfileSshToHclTerraform(struct?: AntivirusProfileSshOutputReference | AntivirusProfileSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_block: {
      value: cdktf.stringToHclTerraform(struct!.archiveBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_log: {
      value: cdktf.stringToHclTerraform(struct!.archiveLog),
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
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AntivirusProfileSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntivirusProfileSsh | undefined {
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

  public set internalValue(value: AntivirusProfileSsh | undefined) {
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

  // archive_block - computed: false, optional: true, required: false
  private _archiveBlock?: string; 
  public get archiveBlock() {
    return this.getStringAttribute('archive_block');
  }
  public set archiveBlock(value: string) {
    this._archiveBlock = value;
  }
  public resetArchiveBlock() {
    this._archiveBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBlockInput() {
    return this._archiveBlock;
  }

  // archive_log - computed: false, optional: true, required: false
  private _archiveLog?: string; 
  public get archiveLog() {
    return this.getStringAttribute('archive_log');
  }
  public set archiveLog(value: string) {
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

  // malware_stream - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile fortios_antivirus_profile}
*/
export class AntivirusProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_antivirus_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntivirusProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntivirusProfile to import
  * @param importFromId The id of the existing AntivirusProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntivirusProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_antivirus_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/antivirus_profile fortios_antivirus_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntivirusProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AntivirusProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_antivirus_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsAcceptFiletype = config.analyticsAcceptFiletype;
    this._analyticsBlFiletype = config.analyticsBlFiletype;
    this._analyticsDb = config.analyticsDb;
    this._analyticsIgnoreFiletype = config.analyticsIgnoreFiletype;
    this._analyticsMaxUpload = config.analyticsMaxUpload;
    this._analyticsWlFiletype = config.analyticsWlFiletype;
    this._avBlockLog = config.avBlockLog;
    this._avVirusLog = config.avVirusLog;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emsThreatFeed = config.emsThreatFeed;
    this._extendedLog = config.extendedLog;
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
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._inspectionMode = config.inspectionMode;
    this._mobileMalwareDb = config.mobileMalwareDb;
    this._name = config.name;
    this._outbreakPreventionArchiveScan = config.outbreakPreventionArchiveScan;
    this._replacemsgGroup = config.replacemsgGroup;
    this._scanMode = config.scanMode;
    this._vdomparam = config.vdomparam;
    this._cifs.internalValue = config.cifs;
    this._contentDisarm.internalValue = config.contentDisarm;
    this._externalBlocklist.internalValue = config.externalBlocklist;
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

  // analytics_accept_filetype - computed: false, optional: true, required: false
  private _analyticsAcceptFiletype?: number; 
  public get analyticsAcceptFiletype() {
    return this.getNumberAttribute('analytics_accept_filetype');
  }
  public set analyticsAcceptFiletype(value: number) {
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
  private _analyticsBlFiletype?: number; 
  public get analyticsBlFiletype() {
    return this.getNumberAttribute('analytics_bl_filetype');
  }
  public set analyticsBlFiletype(value: number) {
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
  private _analyticsIgnoreFiletype?: number; 
  public get analyticsIgnoreFiletype() {
    return this.getNumberAttribute('analytics_ignore_filetype');
  }
  public set analyticsIgnoreFiletype(value: number) {
    this._analyticsIgnoreFiletype = value;
  }
  public resetAnalyticsIgnoreFiletype() {
    this._analyticsIgnoreFiletype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsIgnoreFiletypeInput() {
    return this._analyticsIgnoreFiletype;
  }

  // analytics_max_upload - computed: true, optional: true, required: false
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
  private _analyticsWlFiletype?: number; 
  public get analyticsWlFiletype() {
    return this.getNumberAttribute('analytics_wl_filetype');
  }
  public set analyticsWlFiletype(value: number) {
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // scan_mode - computed: true, optional: true, required: false
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

  // cifs - computed: false, optional: true, required: false
  private _cifs = new AntivirusProfileCifsOutputReference(this, "cifs");
  public get cifs() {
    return this._cifs;
  }
  public putCifs(value: AntivirusProfileCifs) {
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
  private _contentDisarm = new AntivirusProfileContentDisarmOutputReference(this, "content_disarm");
  public get contentDisarm() {
    return this._contentDisarm;
  }
  public putContentDisarm(value: AntivirusProfileContentDisarm) {
    this._contentDisarm.internalValue = value;
  }
  public resetContentDisarm() {
    this._contentDisarm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDisarmInput() {
    return this._contentDisarm.internalValue;
  }

  // external_blocklist - computed: false, optional: true, required: false
  private _externalBlocklist = new AntivirusProfileExternalBlocklistStructList(this, "external_blocklist", true);
  public get externalBlocklist() {
    return this._externalBlocklist;
  }
  public putExternalBlocklist(value: AntivirusProfileExternalBlocklistStruct[] | cdktf.IResolvable) {
    this._externalBlocklist.internalValue = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new AntivirusProfileFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: AntivirusProfileFtp) {
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
  private _http = new AntivirusProfileHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: AntivirusProfileHttp) {
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
  private _imap = new AntivirusProfileImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: AntivirusProfileImap) {
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
  private _mapi = new AntivirusProfileMapiOutputReference(this, "mapi");
  public get mapi() {
    return this._mapi;
  }
  public putMapi(value: AntivirusProfileMapi) {
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
  private _nacQuar = new AntivirusProfileNacQuarOutputReference(this, "nac_quar");
  public get nacQuar() {
    return this._nacQuar;
  }
  public putNacQuar(value: AntivirusProfileNacQuar) {
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
  private _nntp = new AntivirusProfileNntpOutputReference(this, "nntp");
  public get nntp() {
    return this._nntp;
  }
  public putNntp(value: AntivirusProfileNntp) {
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
  private _outbreakPrevention = new AntivirusProfileOutbreakPreventionOutputReference(this, "outbreak_prevention");
  public get outbreakPrevention() {
    return this._outbreakPrevention;
  }
  public putOutbreakPrevention(value: AntivirusProfileOutbreakPrevention) {
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
  private _pop3 = new AntivirusProfilePop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: AntivirusProfilePop3) {
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
  private _smb = new AntivirusProfileSmbOutputReference(this, "smb");
  public get smb() {
    return this._smb;
  }
  public putSmb(value: AntivirusProfileSmb) {
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
  private _smtp = new AntivirusProfileSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: AntivirusProfileSmtp) {
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
  private _ssh = new AntivirusProfileSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: AntivirusProfileSsh) {
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
      analytics_accept_filetype: cdktf.numberToTerraform(this._analyticsAcceptFiletype),
      analytics_bl_filetype: cdktf.numberToTerraform(this._analyticsBlFiletype),
      analytics_db: cdktf.stringToTerraform(this._analyticsDb),
      analytics_ignore_filetype: cdktf.numberToTerraform(this._analyticsIgnoreFiletype),
      analytics_max_upload: cdktf.numberToTerraform(this._analyticsMaxUpload),
      analytics_wl_filetype: cdktf.numberToTerraform(this._analyticsWlFiletype),
      av_block_log: cdktf.stringToTerraform(this._avBlockLog),
      av_virus_log: cdktf.stringToTerraform(this._avVirusLog),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      ems_threat_feed: cdktf.stringToTerraform(this._emsThreatFeed),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
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
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      mobile_malware_db: cdktf.stringToTerraform(this._mobileMalwareDb),
      name: cdktf.stringToTerraform(this._name),
      outbreak_prevention_archive_scan: cdktf.stringToTerraform(this._outbreakPreventionArchiveScan),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      scan_mode: cdktf.stringToTerraform(this._scanMode),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      cifs: antivirusProfileCifsToTerraform(this._cifs.internalValue),
      content_disarm: antivirusProfileContentDisarmToTerraform(this._contentDisarm.internalValue),
      external_blocklist: cdktf.listMapper(antivirusProfileExternalBlocklistStructToTerraform, true)(this._externalBlocklist.internalValue),
      ftp: antivirusProfileFtpToTerraform(this._ftp.internalValue),
      http: antivirusProfileHttpToTerraform(this._http.internalValue),
      imap: antivirusProfileImapToTerraform(this._imap.internalValue),
      mapi: antivirusProfileMapiToTerraform(this._mapi.internalValue),
      nac_quar: antivirusProfileNacQuarToTerraform(this._nacQuar.internalValue),
      nntp: antivirusProfileNntpToTerraform(this._nntp.internalValue),
      outbreak_prevention: antivirusProfileOutbreakPreventionToTerraform(this._outbreakPrevention.internalValue),
      pop3: antivirusProfilePop3ToTerraform(this._pop3.internalValue),
      smb: antivirusProfileSmbToTerraform(this._smb.internalValue),
      smtp: antivirusProfileSmtpToTerraform(this._smtp.internalValue),
      ssh: antivirusProfileSshToTerraform(this._ssh.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_accept_filetype: {
        value: cdktf.numberToHclTerraform(this._analyticsAcceptFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      analytics_bl_filetype: {
        value: cdktf.numberToHclTerraform(this._analyticsBlFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      analytics_db: {
        value: cdktf.stringToHclTerraform(this._analyticsDb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      analytics_ignore_filetype: {
        value: cdktf.numberToHclTerraform(this._analyticsIgnoreFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      analytics_max_upload: {
        value: cdktf.numberToHclTerraform(this._analyticsMaxUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      analytics_wl_filetype: {
        value: cdktf.numberToHclTerraform(this._analyticsWlFiletype),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cifs: {
        value: antivirusProfileCifsToHclTerraform(this._cifs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileCifsList",
      },
      content_disarm: {
        value: antivirusProfileContentDisarmToHclTerraform(this._contentDisarm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileContentDisarmList",
      },
      external_blocklist: {
        value: cdktf.listMapperHcl(antivirusProfileExternalBlocklistStructToHclTerraform, true)(this._externalBlocklist.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AntivirusProfileExternalBlocklistStructList",
      },
      ftp: {
        value: antivirusProfileFtpToHclTerraform(this._ftp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileFtpList",
      },
      http: {
        value: antivirusProfileHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileHttpList",
      },
      imap: {
        value: antivirusProfileImapToHclTerraform(this._imap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileImapList",
      },
      mapi: {
        value: antivirusProfileMapiToHclTerraform(this._mapi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileMapiList",
      },
      nac_quar: {
        value: antivirusProfileNacQuarToHclTerraform(this._nacQuar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileNacQuarList",
      },
      nntp: {
        value: antivirusProfileNntpToHclTerraform(this._nntp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileNntpList",
      },
      outbreak_prevention: {
        value: antivirusProfileOutbreakPreventionToHclTerraform(this._outbreakPrevention.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileOutbreakPreventionList",
      },
      pop3: {
        value: antivirusProfilePop3ToHclTerraform(this._pop3.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfilePop3List",
      },
      smb: {
        value: antivirusProfileSmbToHclTerraform(this._smb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileSmbList",
      },
      smtp: {
        value: antivirusProfileSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileSmtpList",
      },
      ssh: {
        value: antivirusProfileSshToHclTerraform(this._ssh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusProfileSshList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
