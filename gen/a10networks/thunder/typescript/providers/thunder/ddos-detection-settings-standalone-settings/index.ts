// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionSettingsStandaloneSettingsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable standalone detector; 'disable': Disable standalone detector (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#action DdosDetectionSettingsStandaloneSettingsA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#id DdosDetectionSettingsStandaloneSettingsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#uuid DdosDetectionSettingsStandaloneSettingsA#uuid}
  */
  readonly uuid?: string;
  /**
  * netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#netflow DdosDetectionSettingsStandaloneSettingsA#netflow}
  */
  readonly netflow?: DdosDetectionSettingsStandaloneSettingsNetflowA;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#sflow DdosDetectionSettingsStandaloneSettingsA#sflow}
  */
  readonly sflow?: DdosDetectionSettingsStandaloneSettingsSflowA;
}
export interface DdosDetectionSettingsStandaloneSettingsNetflowA {
  /**
  * 'enable': Enable data distribution by flow duration(default); 'disable': Disable data distribution by flow duration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#distribute_by_duration DdosDetectionSettingsStandaloneSettingsA#distribute_by_duration}
  */
  readonly distributeByDuration?: string;
  /**
  * Netflow port to receive packets (Netflow port number(default 9996))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#listening_port DdosDetectionSettingsStandaloneSettingsA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * Configure active timeout of the netflow templates received in mins (Template active timeout(mins)(default 30mins))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#template_active_timeout DdosDetectionSettingsStandaloneSettingsA#template_active_timeout}
  */
  readonly templateActiveTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#uuid DdosDetectionSettingsStandaloneSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsStandaloneSettingsNetflowAToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference | DdosDetectionSettingsStandaloneSettingsNetflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_by_duration: cdktf.stringToTerraform(struct!.distributeByDuration),
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    template_active_timeout: cdktf.numberToTerraform(struct!.templateActiveTimeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsStandaloneSettingsNetflowAToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference | DdosDetectionSettingsStandaloneSettingsNetflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_by_duration: {
      value: cdktf.stringToHclTerraform(struct!.distributeByDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listening_port: {
      value: cdktf.numberToHclTerraform(struct!.listeningPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.templateActiveTimeout),
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

export class DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettingsNetflowA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeByDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeByDuration = this._distributeByDuration;
    }
    if (this._listeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPort = this._listeningPort;
    }
    if (this._templateActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateActiveTimeout = this._templateActiveTimeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsStandaloneSettingsNetflowA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distributeByDuration = undefined;
      this._listeningPort = undefined;
      this._templateActiveTimeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distributeByDuration = value.distributeByDuration;
      this._listeningPort = value.listeningPort;
      this._templateActiveTimeout = value.templateActiveTimeout;
      this._uuid = value.uuid;
    }
  }

  // distribute_by_duration - computed: false, optional: true, required: false
  private _distributeByDuration?: string; 
  public get distributeByDuration() {
    return this.getStringAttribute('distribute_by_duration');
  }
  public set distributeByDuration(value: string) {
    this._distributeByDuration = value;
  }
  public resetDistributeByDuration() {
    this._distributeByDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeByDurationInput() {
    return this._distributeByDuration;
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
  }

  // template_active_timeout - computed: false, optional: true, required: false
  private _templateActiveTimeout?: number; 
  public get templateActiveTimeout() {
    return this.getNumberAttribute('template_active_timeout');
  }
  public set templateActiveTimeout(value: number) {
    this._templateActiveTimeout = value;
  }
  public resetTemplateActiveTimeout() {
    this._templateActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateActiveTimeoutInput() {
    return this._templateActiveTimeout;
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
export interface DdosDetectionSettingsStandaloneSettingsSflowA {
  /**
  * sFlow port to receive packets (sFlow port number(default 6343))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#listening_port DdosDetectionSettingsStandaloneSettingsA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#uuid DdosDetectionSettingsStandaloneSettingsA#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsStandaloneSettingsSflowAToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsSflowAOutputReference | DdosDetectionSettingsStandaloneSettingsSflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsStandaloneSettingsSflowAToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsSflowAOutputReference | DdosDetectionSettingsStandaloneSettingsSflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listening_port: {
      value: cdktf.numberToHclTerraform(struct!.listeningPort),
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

export class DdosDetectionSettingsStandaloneSettingsSflowAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettingsSflowA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPort = this._listeningPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsStandaloneSettingsSflowA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listeningPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listeningPort = value.listeningPort;
      this._uuid = value.uuid;
    }
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings thunder_ddos_detection_settings_standalone_settings}
*/
export class DdosDetectionSettingsStandaloneSettingsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_settings_standalone_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionSettingsStandaloneSettingsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionSettingsStandaloneSettingsA to import
  * @param importFromId The id of the existing DdosDetectionSettingsStandaloneSettingsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionSettingsStandaloneSettingsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_settings_standalone_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_settings_standalone_settings thunder_ddos_detection_settings_standalone_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionSettingsStandaloneSettingsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionSettingsStandaloneSettingsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_settings_standalone_settings',
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
    this._action = config.action;
    this._id = config.id;
    this._uuid = config.uuid;
    this._netflow.internalValue = config.netflow;
    this._sflow.internalValue = config.sflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // netflow - computed: false, optional: true, required: false
  private _netflow = new DdosDetectionSettingsStandaloneSettingsNetflowAOutputReference(this, "netflow");
  public get netflow() {
    return this._netflow;
  }
  public putNetflow(value: DdosDetectionSettingsStandaloneSettingsNetflowA) {
    this._netflow.internalValue = value;
  }
  public resetNetflow() {
    this._netflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDetectionSettingsStandaloneSettingsSflowAOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDetectionSettingsStandaloneSettingsSflowA) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      netflow: ddosDetectionSettingsStandaloneSettingsNetflowAToTerraform(this._netflow.internalValue),
      sflow: ddosDetectionSettingsStandaloneSettingsSflowAToTerraform(this._sflow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow: {
        value: ddosDetectionSettingsStandaloneSettingsNetflowAToHclTerraform(this._netflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionSettingsStandaloneSettingsNetflowAList",
      },
      sflow: {
        value: ddosDetectionSettingsStandaloneSettingsSflowAToHclTerraform(this._sflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionSettingsStandaloneSettingsSflowAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
