// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcpSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#device TcpSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#folder TcpSetting#folder}
  */
  readonly folder?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#snippet TcpSetting#snippet}
  */
  readonly snippet?: string;
  /**
  * Tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#tcp TcpSetting#tcp}
  */
  readonly tcp?: TcpSettingTcp;
}
export interface TcpSettingTcp {
  /**
  * Allow arbitrary ACK in response to SYN?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#allow_challenge_ack TcpSetting#allow_challenge_ack}
  */
  readonly allowChallengeAck?: boolean | cdktf.IResolvable;
  /**
  * Asymmetric path action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#asymmetric_path TcpSetting#asymmetric_path}
  */
  readonly asymmetricPath?: string;
  /**
  * Forward segments exceeding TCP out-of-order queue?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#bypass_exceed_oo_queue TcpSetting#bypass_exceed_oo_queue}
  */
  readonly bypassExceedOoQueue?: boolean | cdktf.IResolvable;
  /**
  * Drop segments with null timestamp option?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#check_timestamp_option TcpSetting#check_timestamp_option}
  */
  readonly checkTimestampOption?: boolean | cdktf.IResolvable;
  /**
  * Drop segments without flag?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#drop_zero_flag TcpSetting#drop_zero_flag}
  */
  readonly dropZeroFlag?: boolean | cdktf.IResolvable;
  /**
  * SIP TCP cleartext action (`'0'` = Always Off, `'1'` = Always Enabled, `'2'` = Automatically enable proxy when needed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#siptcp_cleartext_proxy TcpSetting#siptcp_cleartext_proxy}
  */
  readonly siptcpCleartextProxy?: string;
  /**
  * Strip MPTCP option?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#strip_mptcp_option TcpSetting#strip_mptcp_option}
  */
  readonly stripMptcpOption?: boolean | cdktf.IResolvable;
  /**
  * TCP retransmit scan?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#tcp_retransmit_scan TcpSetting#tcp_retransmit_scan}
  */
  readonly tcpRetransmitScan?: boolean | cdktf.IResolvable;
  /**
  * Urgent data flag action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#urgent_data TcpSetting#urgent_data}
  */
  readonly urgentData?: string;
}

export function tcpSettingTcpToTerraform(struct?: TcpSettingTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_challenge_ack: cdktf.booleanToTerraform(struct!.allowChallengeAck),
    asymmetric_path: cdktf.stringToTerraform(struct!.asymmetricPath),
    bypass_exceed_oo_queue: cdktf.booleanToTerraform(struct!.bypassExceedOoQueue),
    check_timestamp_option: cdktf.booleanToTerraform(struct!.checkTimestampOption),
    drop_zero_flag: cdktf.booleanToTerraform(struct!.dropZeroFlag),
    siptcp_cleartext_proxy: cdktf.stringToTerraform(struct!.siptcpCleartextProxy),
    strip_mptcp_option: cdktf.booleanToTerraform(struct!.stripMptcpOption),
    tcp_retransmit_scan: cdktf.booleanToTerraform(struct!.tcpRetransmitScan),
    urgent_data: cdktf.stringToTerraform(struct!.urgentData),
  }
}


export function tcpSettingTcpToHclTerraform(struct?: TcpSettingTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_challenge_ack: {
      value: cdktf.booleanToHclTerraform(struct!.allowChallengeAck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asymmetric_path: {
      value: cdktf.stringToHclTerraform(struct!.asymmetricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_exceed_oo_queue: {
      value: cdktf.booleanToHclTerraform(struct!.bypassExceedOoQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_timestamp_option: {
      value: cdktf.booleanToHclTerraform(struct!.checkTimestampOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_zero_flag: {
      value: cdktf.booleanToHclTerraform(struct!.dropZeroFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    siptcp_cleartext_proxy: {
      value: cdktf.stringToHclTerraform(struct!.siptcpCleartextProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_mptcp_option: {
      value: cdktf.booleanToHclTerraform(struct!.stripMptcpOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcp_retransmit_scan: {
      value: cdktf.booleanToHclTerraform(struct!.tcpRetransmitScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    urgent_data: {
      value: cdktf.stringToHclTerraform(struct!.urgentData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcpSettingTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TcpSettingTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowChallengeAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowChallengeAck = this._allowChallengeAck;
    }
    if (this._asymmetricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asymmetricPath = this._asymmetricPath;
    }
    if (this._bypassExceedOoQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassExceedOoQueue = this._bypassExceedOoQueue;
    }
    if (this._checkTimestampOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkTimestampOption = this._checkTimestampOption;
    }
    if (this._dropZeroFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropZeroFlag = this._dropZeroFlag;
    }
    if (this._siptcpCleartextProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siptcpCleartextProxy = this._siptcpCleartextProxy;
    }
    if (this._stripMptcpOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripMptcpOption = this._stripMptcpOption;
    }
    if (this._tcpRetransmitScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetransmitScan = this._tcpRetransmitScan;
    }
    if (this._urgentData !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgentData = this._urgentData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcpSettingTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowChallengeAck = undefined;
      this._asymmetricPath = undefined;
      this._bypassExceedOoQueue = undefined;
      this._checkTimestampOption = undefined;
      this._dropZeroFlag = undefined;
      this._siptcpCleartextProxy = undefined;
      this._stripMptcpOption = undefined;
      this._tcpRetransmitScan = undefined;
      this._urgentData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowChallengeAck = value.allowChallengeAck;
      this._asymmetricPath = value.asymmetricPath;
      this._bypassExceedOoQueue = value.bypassExceedOoQueue;
      this._checkTimestampOption = value.checkTimestampOption;
      this._dropZeroFlag = value.dropZeroFlag;
      this._siptcpCleartextProxy = value.siptcpCleartextProxy;
      this._stripMptcpOption = value.stripMptcpOption;
      this._tcpRetransmitScan = value.tcpRetransmitScan;
      this._urgentData = value.urgentData;
    }
  }

  // allow_challenge_ack - computed: false, optional: true, required: false
  private _allowChallengeAck?: boolean | cdktf.IResolvable; 
  public get allowChallengeAck() {
    return this.getBooleanAttribute('allow_challenge_ack');
  }
  public set allowChallengeAck(value: boolean | cdktf.IResolvable) {
    this._allowChallengeAck = value;
  }
  public resetAllowChallengeAck() {
    this._allowChallengeAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChallengeAckInput() {
    return this._allowChallengeAck;
  }

  // asymmetric_path - computed: false, optional: true, required: false
  private _asymmetricPath?: string; 
  public get asymmetricPath() {
    return this.getStringAttribute('asymmetric_path');
  }
  public set asymmetricPath(value: string) {
    this._asymmetricPath = value;
  }
  public resetAsymmetricPath() {
    this._asymmetricPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricPathInput() {
    return this._asymmetricPath;
  }

  // bypass_exceed_oo_queue - computed: false, optional: true, required: false
  private _bypassExceedOoQueue?: boolean | cdktf.IResolvable; 
  public get bypassExceedOoQueue() {
    return this.getBooleanAttribute('bypass_exceed_oo_queue');
  }
  public set bypassExceedOoQueue(value: boolean | cdktf.IResolvable) {
    this._bypassExceedOoQueue = value;
  }
  public resetBypassExceedOoQueue() {
    this._bypassExceedOoQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassExceedOoQueueInput() {
    return this._bypassExceedOoQueue;
  }

  // check_timestamp_option - computed: false, optional: true, required: false
  private _checkTimestampOption?: boolean | cdktf.IResolvable; 
  public get checkTimestampOption() {
    return this.getBooleanAttribute('check_timestamp_option');
  }
  public set checkTimestampOption(value: boolean | cdktf.IResolvable) {
    this._checkTimestampOption = value;
  }
  public resetCheckTimestampOption() {
    this._checkTimestampOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTimestampOptionInput() {
    return this._checkTimestampOption;
  }

  // drop_zero_flag - computed: false, optional: true, required: false
  private _dropZeroFlag?: boolean | cdktf.IResolvable; 
  public get dropZeroFlag() {
    return this.getBooleanAttribute('drop_zero_flag');
  }
  public set dropZeroFlag(value: boolean | cdktf.IResolvable) {
    this._dropZeroFlag = value;
  }
  public resetDropZeroFlag() {
    this._dropZeroFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropZeroFlagInput() {
    return this._dropZeroFlag;
  }

  // siptcp_cleartext_proxy - computed: false, optional: true, required: false
  private _siptcpCleartextProxy?: string; 
  public get siptcpCleartextProxy() {
    return this.getStringAttribute('siptcp_cleartext_proxy');
  }
  public set siptcpCleartextProxy(value: string) {
    this._siptcpCleartextProxy = value;
  }
  public resetSiptcpCleartextProxy() {
    this._siptcpCleartextProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siptcpCleartextProxyInput() {
    return this._siptcpCleartextProxy;
  }

  // strip_mptcp_option - computed: false, optional: true, required: false
  private _stripMptcpOption?: boolean | cdktf.IResolvable; 
  public get stripMptcpOption() {
    return this.getBooleanAttribute('strip_mptcp_option');
  }
  public set stripMptcpOption(value: boolean | cdktf.IResolvable) {
    this._stripMptcpOption = value;
  }
  public resetStripMptcpOption() {
    this._stripMptcpOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripMptcpOptionInput() {
    return this._stripMptcpOption;
  }

  // tcp_retransmit_scan - computed: false, optional: true, required: false
  private _tcpRetransmitScan?: boolean | cdktf.IResolvable; 
  public get tcpRetransmitScan() {
    return this.getBooleanAttribute('tcp_retransmit_scan');
  }
  public set tcpRetransmitScan(value: boolean | cdktf.IResolvable) {
    this._tcpRetransmitScan = value;
  }
  public resetTcpRetransmitScan() {
    this._tcpRetransmitScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetransmitScanInput() {
    return this._tcpRetransmitScan;
  }

  // urgent_data - computed: false, optional: true, required: false
  private _urgentData?: string; 
  public get urgentData() {
    return this.getStringAttribute('urgent_data');
  }
  public set urgentData(value: string) {
    this._urgentData = value;
  }
  public resetUrgentData() {
    this._urgentData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgentDataInput() {
    return this._urgentData;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting scm_tcp_setting}
*/
export class TcpSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_tcp_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcpSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcpSetting to import
  * @param importFromId The id of the existing TcpSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcpSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_tcp_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/tcp_setting scm_tcp_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcpSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TcpSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_tcp_setting',
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
    this._tcp.internalValue = config.tcp;
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

  // tcp - computed: false, optional: true, required: false
  private _tcp = new TcpSettingTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: TcpSettingTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      snippet: cdktf.stringToTerraform(this._snippet),
      tcp: tcpSettingTcpToTerraform(this._tcp.internalValue),
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
      tcp: {
        value: tcpSettingTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TcpSettingTcp",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
