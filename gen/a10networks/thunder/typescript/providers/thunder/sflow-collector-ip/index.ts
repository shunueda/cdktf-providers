// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SflowCollectorIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure sFlow collector IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#addr SflowCollectorIp#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#id SflowCollectorIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port number (default is 6343)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#port SflowCollectorIp#port}
  */
  readonly port: number;
  /**
  * sFlow collector is through out-of-band management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#use_mgmt_port SflowCollectorIp#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#user_tag SflowCollectorIp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#uuid SflowCollectorIp#uuid}
  */
  readonly uuid?: string;
  /**
  * customized_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#customized_setting SflowCollectorIp#customized_setting}
  */
  readonly customizedSetting?: SflowCollectorIpCustomizedSetting;
}
export interface SflowCollectorIpCustomizedSetting {
  /**
  * Enable counters for ACOS control blocks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#a10_proprietary_polling SflowCollectorIp#a10_proprietary_polling}
  */
  readonly a10ProprietaryPolling?: number;
  /**
  * Enable counter polling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#counter_polling SflowCollectorIp#counter_polling}
  */
  readonly counterPolling?: number;
  /**
  * Enable event notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#event_notification SflowCollectorIp#event_notification}
  */
  readonly eventNotification?: number;
  /**
  * 'export': Export settings;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#export_enable SflowCollectorIp#export_enable}
  */
  readonly exportEnable?: string;
  /**
  * Enable packet sampling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#packet_sampling SflowCollectorIp#packet_sampling}
  */
  readonly packetSampling?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#uuid SflowCollectorIp#uuid}
  */
  readonly uuid?: string;
}

export function sflowCollectorIpCustomizedSettingToTerraform(struct?: SflowCollectorIpCustomizedSettingOutputReference | SflowCollectorIpCustomizedSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a10_proprietary_polling: cdktf.numberToTerraform(struct!.a10ProprietaryPolling),
    counter_polling: cdktf.numberToTerraform(struct!.counterPolling),
    event_notification: cdktf.numberToTerraform(struct!.eventNotification),
    export_enable: cdktf.stringToTerraform(struct!.exportEnable),
    packet_sampling: cdktf.numberToTerraform(struct!.packetSampling),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function sflowCollectorIpCustomizedSettingToHclTerraform(struct?: SflowCollectorIpCustomizedSettingOutputReference | SflowCollectorIpCustomizedSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a10_proprietary_polling: {
      value: cdktf.numberToHclTerraform(struct!.a10ProprietaryPolling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    counter_polling: {
      value: cdktf.numberToHclTerraform(struct!.counterPolling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_notification: {
      value: cdktf.numberToHclTerraform(struct!.eventNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    export_enable: {
      value: cdktf.stringToHclTerraform(struct!.exportEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_sampling: {
      value: cdktf.numberToHclTerraform(struct!.packetSampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SflowCollectorIpCustomizedSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SflowCollectorIpCustomizedSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a10ProprietaryPolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.a10ProprietaryPolling = this._a10ProprietaryPolling;
    }
    if (this._counterPolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterPolling = this._counterPolling;
    }
    if (this._eventNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventNotification = this._eventNotification;
    }
    if (this._exportEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportEnable = this._exportEnable;
    }
    if (this._packetSampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSampling = this._packetSampling;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SflowCollectorIpCustomizedSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._a10ProprietaryPolling = undefined;
      this._counterPolling = undefined;
      this._eventNotification = undefined;
      this._exportEnable = undefined;
      this._packetSampling = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._a10ProprietaryPolling = value.a10ProprietaryPolling;
      this._counterPolling = value.counterPolling;
      this._eventNotification = value.eventNotification;
      this._exportEnable = value.exportEnable;
      this._packetSampling = value.packetSampling;
      this._uuid = value.uuid;
    }
  }

  // a10_proprietary_polling - computed: false, optional: true, required: false
  private _a10ProprietaryPolling?: number; 
  public get a10ProprietaryPolling() {
    return this.getNumberAttribute('a10_proprietary_polling');
  }
  public set a10ProprietaryPolling(value: number) {
    this._a10ProprietaryPolling = value;
  }
  public resetA10ProprietaryPolling() {
    this._a10ProprietaryPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10ProprietaryPollingInput() {
    return this._a10ProprietaryPolling;
  }

  // counter_polling - computed: false, optional: true, required: false
  private _counterPolling?: number; 
  public get counterPolling() {
    return this.getNumberAttribute('counter_polling');
  }
  public set counterPolling(value: number) {
    this._counterPolling = value;
  }
  public resetCounterPolling() {
    this._counterPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterPollingInput() {
    return this._counterPolling;
  }

  // event_notification - computed: false, optional: true, required: false
  private _eventNotification?: number; 
  public get eventNotification() {
    return this.getNumberAttribute('event_notification');
  }
  public set eventNotification(value: number) {
    this._eventNotification = value;
  }
  public resetEventNotification() {
    this._eventNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNotificationInput() {
    return this._eventNotification;
  }

  // export_enable - computed: false, optional: true, required: false
  private _exportEnable?: string; 
  public get exportEnable() {
    return this.getStringAttribute('export_enable');
  }
  public set exportEnable(value: string) {
    this._exportEnable = value;
  }
  public resetExportEnable() {
    this._exportEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportEnableInput() {
    return this._exportEnable;
  }

  // packet_sampling - computed: false, optional: true, required: false
  private _packetSampling?: number; 
  public get packetSampling() {
    return this.getNumberAttribute('packet_sampling');
  }
  public set packetSampling(value: number) {
    this._packetSampling = value;
  }
  public resetPacketSampling() {
    this._packetSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSamplingInput() {
    return this._packetSampling;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip thunder_sflow_collector_ip}
*/
export class SflowCollectorIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sflow_collector_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SflowCollectorIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SflowCollectorIp to import
  * @param importFromId The id of the existing SflowCollectorIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SflowCollectorIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sflow_collector_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/sflow_collector_ip thunder_sflow_collector_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SflowCollectorIpConfig
  */
  public constructor(scope: Construct, id: string, config: SflowCollectorIpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_sflow_collector_ip',
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
    this._addr = config.addr;
    this._id = config.id;
    this._port = config.port;
    this._useMgmtPort = config.useMgmtPort;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._customizedSetting.internalValue = config.customizedSetting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // customized_setting - computed: false, optional: true, required: false
  private _customizedSetting = new SflowCollectorIpCustomizedSettingOutputReference(this, "customized_setting");
  public get customizedSetting() {
    return this._customizedSetting;
  }
  public putCustomizedSetting(value: SflowCollectorIpCustomizedSetting) {
    this._customizedSetting.internalValue = value;
  }
  public resetCustomizedSetting() {
    this._customizedSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedSettingInput() {
    return this._customizedSetting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      customized_setting: sflowCollectorIpCustomizedSettingToTerraform(this._customizedSetting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_setting: {
        value: sflowCollectorIpCustomizedSettingToHclTerraform(this._customizedSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SflowCollectorIpCustomizedSettingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
