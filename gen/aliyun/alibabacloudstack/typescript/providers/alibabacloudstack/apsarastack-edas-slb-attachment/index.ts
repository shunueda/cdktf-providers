// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackEdasSlbAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#app_id ApsarastackEdasSlbAttachment#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#id ApsarastackEdasSlbAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#listener_port ApsarastackEdasSlbAttachment#listener_port}
  */
  readonly listenerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#slb_id ApsarastackEdasSlbAttachment#slb_id}
  */
  readonly slbId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#slb_ip ApsarastackEdasSlbAttachment#slb_ip}
  */
  readonly slbIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#type ApsarastackEdasSlbAttachment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#vserver_group_id ApsarastackEdasSlbAttachment#vserver_group_id}
  */
  readonly vserverGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment apsarastack_edas_slb_attachment}
*/
export class ApsarastackEdasSlbAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_edas_slb_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackEdasSlbAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackEdasSlbAttachment to import
  * @param importFromId The id of the existing ApsarastackEdasSlbAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackEdasSlbAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_edas_slb_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_edas_slb_attachment apsarastack_edas_slb_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackEdasSlbAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackEdasSlbAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_edas_slb_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._id = config.id;
    this._listenerPort = config.listenerPort;
    this._slbId = config.slbId;
    this._slbIp = config.slbIp;
    this._type = config.type;
    this._vserverGroupId = config.vserverGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // listener_port - computed: false, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // slb_id - computed: false, optional: false, required: true
  private _slbId?: string; 
  public get slbId() {
    return this.getStringAttribute('slb_id');
  }
  public set slbId(value: string) {
    this._slbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slbIdInput() {
    return this._slbId;
  }

  // slb_ip - computed: false, optional: false, required: true
  private _slbIp?: string; 
  public get slbIp() {
    return this.getStringAttribute('slb_ip');
  }
  public set slbIp(value: string) {
    this._slbIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slbIpInput() {
    return this._slbIp;
  }

  // slb_status - computed: true, optional: false, required: false
  public get slbStatus() {
    return this.getStringAttribute('slb_status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vserver_group_id - computed: false, optional: true, required: false
  private _vserverGroupId?: string; 
  public get vserverGroupId() {
    return this.getStringAttribute('vserver_group_id');
  }
  public set vserverGroupId(value: string) {
    this._vserverGroupId = value;
  }
  public resetVserverGroupId() {
    this._vserverGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverGroupIdInput() {
    return this._vserverGroupId;
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      slb_id: cdktf.stringToTerraform(this._slbId),
      slb_ip: cdktf.stringToTerraform(this._slbIp),
      type: cdktf.stringToTerraform(this._type),
      vserver_group_id: cdktf.stringToTerraform(this._vserverGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_id: {
        value: cdktf.stringToHclTerraform(this._slbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slb_ip: {
        value: cdktf.stringToHclTerraform(this._slbIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vserver_group_id: {
        value: cdktf.stringToHclTerraform(this._vserverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
