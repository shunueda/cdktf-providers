// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsLogdbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable logging for all widgets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_all AcosEventsLogdb#enable_all}
  */
  readonly enableAll?: number;
  /**
  * Enable CGN logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_cgn AcosEventsLogdb#enable_cgn}
  */
  readonly enableCgn?: number;
  /**
  * Enable Firewall logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_fw AcosEventsLogdb#enable_fw}
  */
  readonly enableFw?: number;
  /**
  * Enable HTTP forward proxy logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_http_forward_proxy AcosEventsLogdb#enable_http_forward_proxy}
  */
  readonly enableHttpForwardProxy?: number;
  /**
  * Enable link-cost logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_link_cost AcosEventsLogdb#enable_link_cost}
  */
  readonly enableLinkCost?: number;
  /**
  * Enable MQTT logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_mqtt AcosEventsLogdb#enable_mqtt}
  */
  readonly enableMqtt?: number;
  /**
  * Enable SMTP logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_smtp AcosEventsLogdb#enable_smtp}
  */
  readonly enableSmtp?: number;
  /**
  * Enable SSLi logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#enable_ssli AcosEventsLogdb#enable_ssli}
  */
  readonly enableSsli?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#id AcosEventsLogdb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#uuid AcosEventsLogdb#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb thunder_acos_events_logdb}
*/
export class AcosEventsLogdb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_logdb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsLogdb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsLogdb to import
  * @param importFromId The id of the existing AcosEventsLogdb that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsLogdb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_logdb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/acos_events_logdb thunder_acos_events_logdb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsLogdbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcosEventsLogdbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_logdb',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableAll = config.enableAll;
    this._enableCgn = config.enableCgn;
    this._enableFw = config.enableFw;
    this._enableHttpForwardProxy = config.enableHttpForwardProxy;
    this._enableLinkCost = config.enableLinkCost;
    this._enableMqtt = config.enableMqtt;
    this._enableSmtp = config.enableSmtp;
    this._enableSsli = config.enableSsli;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_all - computed: false, optional: true, required: false
  private _enableAll?: number; 
  public get enableAll() {
    return this.getNumberAttribute('enable_all');
  }
  public set enableAll(value: number) {
    this._enableAll = value;
  }
  public resetEnableAll() {
    this._enableAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllInput() {
    return this._enableAll;
  }

  // enable_cgn - computed: false, optional: true, required: false
  private _enableCgn?: number; 
  public get enableCgn() {
    return this.getNumberAttribute('enable_cgn');
  }
  public set enableCgn(value: number) {
    this._enableCgn = value;
  }
  public resetEnableCgn() {
    this._enableCgn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCgnInput() {
    return this._enableCgn;
  }

  // enable_fw - computed: false, optional: true, required: false
  private _enableFw?: number; 
  public get enableFw() {
    return this.getNumberAttribute('enable_fw');
  }
  public set enableFw(value: number) {
    this._enableFw = value;
  }
  public resetEnableFw() {
    this._enableFw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFwInput() {
    return this._enableFw;
  }

  // enable_http_forward_proxy - computed: false, optional: true, required: false
  private _enableHttpForwardProxy?: number; 
  public get enableHttpForwardProxy() {
    return this.getNumberAttribute('enable_http_forward_proxy');
  }
  public set enableHttpForwardProxy(value: number) {
    this._enableHttpForwardProxy = value;
  }
  public resetEnableHttpForwardProxy() {
    this._enableHttpForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpForwardProxyInput() {
    return this._enableHttpForwardProxy;
  }

  // enable_link_cost - computed: false, optional: true, required: false
  private _enableLinkCost?: number; 
  public get enableLinkCost() {
    return this.getNumberAttribute('enable_link_cost');
  }
  public set enableLinkCost(value: number) {
    this._enableLinkCost = value;
  }
  public resetEnableLinkCost() {
    this._enableLinkCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLinkCostInput() {
    return this._enableLinkCost;
  }

  // enable_mqtt - computed: false, optional: true, required: false
  private _enableMqtt?: number; 
  public get enableMqtt() {
    return this.getNumberAttribute('enable_mqtt');
  }
  public set enableMqtt(value: number) {
    this._enableMqtt = value;
  }
  public resetEnableMqtt() {
    this._enableMqtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMqttInput() {
    return this._enableMqtt;
  }

  // enable_smtp - computed: false, optional: true, required: false
  private _enableSmtp?: number; 
  public get enableSmtp() {
    return this.getNumberAttribute('enable_smtp');
  }
  public set enableSmtp(value: number) {
    this._enableSmtp = value;
  }
  public resetEnableSmtp() {
    this._enableSmtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSmtpInput() {
    return this._enableSmtp;
  }

  // enable_ssli - computed: false, optional: true, required: false
  private _enableSsli?: number; 
  public get enableSsli() {
    return this.getNumberAttribute('enable_ssli');
  }
  public set enableSsli(value: number) {
    this._enableSsli = value;
  }
  public resetEnableSsli() {
    this._enableSsli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsliInput() {
    return this._enableSsli;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_all: cdktf.numberToTerraform(this._enableAll),
      enable_cgn: cdktf.numberToTerraform(this._enableCgn),
      enable_fw: cdktf.numberToTerraform(this._enableFw),
      enable_http_forward_proxy: cdktf.numberToTerraform(this._enableHttpForwardProxy),
      enable_link_cost: cdktf.numberToTerraform(this._enableLinkCost),
      enable_mqtt: cdktf.numberToTerraform(this._enableMqtt),
      enable_smtp: cdktf.numberToTerraform(this._enableSmtp),
      enable_ssli: cdktf.numberToTerraform(this._enableSsli),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_all: {
        value: cdktf.numberToHclTerraform(this._enableAll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_cgn: {
        value: cdktf.numberToHclTerraform(this._enableCgn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_fw: {
        value: cdktf.numberToHclTerraform(this._enableFw),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_http_forward_proxy: {
        value: cdktf.numberToHclTerraform(this._enableHttpForwardProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_link_cost: {
        value: cdktf.numberToHclTerraform(this._enableLinkCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_mqtt: {
        value: cdktf.numberToHclTerraform(this._enableMqtt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_smtp: {
        value: cdktf.numberToHclTerraform(this._enableSmtp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ssli: {
        value: cdktf.numberToHclTerraform(this._enableSsli),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
