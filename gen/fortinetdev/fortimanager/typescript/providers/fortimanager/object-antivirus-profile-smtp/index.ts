// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectAntivirusProfileSmtpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#adom ObjectAntivirusProfileSmtpA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#archive_block ObjectAntivirusProfileSmtpA#archive_block}
  */
  readonly archiveBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#archive_log ObjectAntivirusProfileSmtpA#archive_log}
  */
  readonly archiveLog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#av_scan ObjectAntivirusProfileSmtpA#av_scan}
  */
  readonly avScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#content_disarm ObjectAntivirusProfileSmtpA#content_disarm}
  */
  readonly contentDisarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#emulator ObjectAntivirusProfileSmtpA#emulator}
  */
  readonly emulator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#executables ObjectAntivirusProfileSmtpA#executables}
  */
  readonly executables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#external_blocklist ObjectAntivirusProfileSmtpA#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#fortiai ObjectAntivirusProfileSmtpA#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#fortindr ObjectAntivirusProfileSmtpA#fortindr}
  */
  readonly fortindr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#fortisandbox ObjectAntivirusProfileSmtpA#fortisandbox}
  */
  readonly fortisandbox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#id ObjectAntivirusProfileSmtpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#options ObjectAntivirusProfileSmtpA#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#outbreak_prevention ObjectAntivirusProfileSmtpA#outbreak_prevention}
  */
  readonly outbreakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#profile ObjectAntivirusProfileSmtpA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#quarantine ObjectAntivirusProfileSmtpA#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#scopetype ObjectAntivirusProfileSmtpA#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp fortimanager_object_antivirus_profile_smtp}
*/
export class ObjectAntivirusProfileSmtpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_antivirus_profile_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectAntivirusProfileSmtpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectAntivirusProfileSmtpA to import
  * @param importFromId The id of the existing ObjectAntivirusProfileSmtpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectAntivirusProfileSmtpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_antivirus_profile_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_antivirus_profile_smtp fortimanager_object_antivirus_profile_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectAntivirusProfileSmtpAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectAntivirusProfileSmtpAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_antivirus_profile_smtp',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._archiveBlock = config.archiveBlock;
    this._archiveLog = config.archiveLog;
    this._avScan = config.avScan;
    this._contentDisarm = config.contentDisarm;
    this._emulator = config.emulator;
    this._executables = config.executables;
    this._externalBlocklist = config.externalBlocklist;
    this._fortiai = config.fortiai;
    this._fortindr = config.fortindr;
    this._fortisandbox = config.fortisandbox;
    this._id = config.id;
    this._options = config.options;
    this._outbreakPrevention = config.outbreakPrevention;
    this._profile = config.profile;
    this._quarantine = config.quarantine;
    this._scopetype = config.scopetype;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      archive_block: cdktf.listMapper(cdktf.stringToTerraform, false)(this._archiveBlock),
      archive_log: cdktf.listMapper(cdktf.stringToTerraform, false)(this._archiveLog),
      av_scan: cdktf.stringToTerraform(this._avScan),
      content_disarm: cdktf.stringToTerraform(this._contentDisarm),
      emulator: cdktf.stringToTerraform(this._emulator),
      executables: cdktf.stringToTerraform(this._executables),
      external_blocklist: cdktf.stringToTerraform(this._externalBlocklist),
      fortiai: cdktf.stringToTerraform(this._fortiai),
      fortindr: cdktf.stringToTerraform(this._fortindr),
      fortisandbox: cdktf.stringToTerraform(this._fortisandbox),
      id: cdktf.stringToTerraform(this._id),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      outbreak_prevention: cdktf.stringToTerraform(this._outbreakPrevention),
      profile: cdktf.stringToTerraform(this._profile),
      quarantine: cdktf.stringToTerraform(this._quarantine),
      scopetype: cdktf.stringToTerraform(this._scopetype),
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
      archive_block: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._archiveBlock),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      archive_log: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._archiveLog),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      av_scan: {
        value: cdktf.stringToHclTerraform(this._avScan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_disarm: {
        value: cdktf.stringToHclTerraform(this._contentDisarm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emulator: {
        value: cdktf.stringToHclTerraform(this._emulator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executables: {
        value: cdktf.stringToHclTerraform(this._executables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_blocklist: {
        value: cdktf.stringToHclTerraform(this._externalBlocklist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiai: {
        value: cdktf.stringToHclTerraform(this._fortiai),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortindr: {
        value: cdktf.stringToHclTerraform(this._fortindr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortisandbox: {
        value: cdktf.stringToHclTerraform(this._fortisandbox),
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
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      outbreak_prevention: {
        value: cdktf.stringToHclTerraform(this._outbreakPrevention),
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
      quarantine: {
        value: cdktf.stringToHclTerraform(this._quarantine),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
