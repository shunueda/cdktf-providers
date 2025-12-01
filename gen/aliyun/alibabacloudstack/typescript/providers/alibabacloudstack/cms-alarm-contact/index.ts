// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsAlarmContactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#alarm_contact_name CmsAlarmContact#alarm_contact_name}
  */
  readonly alarmContactName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#channels_ali_im CmsAlarmContact#channels_ali_im}
  */
  readonly channelsAliIm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#channels_aliim CmsAlarmContact#channels_aliim}
  */
  readonly channelsAliim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#channels_ding_web_hook CmsAlarmContact#channels_ding_web_hook}
  */
  readonly channelsDingWebHook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#channels_mail CmsAlarmContact#channels_mail}
  */
  readonly channelsMail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#channels_sms CmsAlarmContact#channels_sms}
  */
  readonly channelsSms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#describe CmsAlarmContact#describe}
  */
  readonly describe: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#id CmsAlarmContact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#lang CmsAlarmContact#lang}
  */
  readonly lang?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact alibabacloudstack_cms_alarm_contact}
*/
export class CmsAlarmContact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cms_alarm_contact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsAlarmContact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsAlarmContact to import
  * @param importFromId The id of the existing CmsAlarmContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsAlarmContact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cms_alarm_contact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cms_alarm_contact alibabacloudstack_cms_alarm_contact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsAlarmContactConfig
  */
  public constructor(scope: Construct, id: string, config: CmsAlarmContactConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cms_alarm_contact',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alarmContactName = config.alarmContactName;
    this._channelsAliIm = config.channelsAliIm;
    this._channelsAliim = config.channelsAliim;
    this._channelsDingWebHook = config.channelsDingWebHook;
    this._channelsMail = config.channelsMail;
    this._channelsSms = config.channelsSms;
    this._describe = config.describe;
    this._id = config.id;
    this._lang = config.lang;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_contact_name - computed: false, optional: false, required: true
  private _alarmContactName?: string; 
  public get alarmContactName() {
    return this.getStringAttribute('alarm_contact_name');
  }
  public set alarmContactName(value: string) {
    this._alarmContactName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmContactNameInput() {
    return this._alarmContactName;
  }

  // channels_ali_im - computed: true, optional: true, required: false
  private _channelsAliIm?: string; 
  public get channelsAliIm() {
    return this.getStringAttribute('channels_ali_im');
  }
  public set channelsAliIm(value: string) {
    this._channelsAliIm = value;
  }
  public resetChannelsAliIm() {
    this._channelsAliIm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsAliImInput() {
    return this._channelsAliIm;
  }

  // channels_aliim - computed: true, optional: true, required: false
  private _channelsAliim?: string; 
  public get channelsAliim() {
    return this.getStringAttribute('channels_aliim');
  }
  public set channelsAliim(value: string) {
    this._channelsAliim = value;
  }
  public resetChannelsAliim() {
    this._channelsAliim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsAliimInput() {
    return this._channelsAliim;
  }

  // channels_ding_web_hook - computed: false, optional: true, required: false
  private _channelsDingWebHook?: string; 
  public get channelsDingWebHook() {
    return this.getStringAttribute('channels_ding_web_hook');
  }
  public set channelsDingWebHook(value: string) {
    this._channelsDingWebHook = value;
  }
  public resetChannelsDingWebHook() {
    this._channelsDingWebHook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsDingWebHookInput() {
    return this._channelsDingWebHook;
  }

  // channels_mail - computed: false, optional: true, required: false
  private _channelsMail?: string; 
  public get channelsMail() {
    return this.getStringAttribute('channels_mail');
  }
  public set channelsMail(value: string) {
    this._channelsMail = value;
  }
  public resetChannelsMail() {
    this._channelsMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsMailInput() {
    return this._channelsMail;
  }

  // channels_sms - computed: false, optional: true, required: false
  private _channelsSms?: string; 
  public get channelsSms() {
    return this.getStringAttribute('channels_sms');
  }
  public set channelsSms(value: string) {
    this._channelsSms = value;
  }
  public resetChannelsSms() {
    this._channelsSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsSmsInput() {
    return this._channelsSms;
  }

  // describe - computed: false, optional: false, required: true
  private _describe?: string; 
  public get describe() {
    return this.getStringAttribute('describe');
  }
  public set describe(value: string) {
    this._describe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get describeInput() {
    return this._describe;
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_contact_name: cdktf.stringToTerraform(this._alarmContactName),
      channels_ali_im: cdktf.stringToTerraform(this._channelsAliIm),
      channels_aliim: cdktf.stringToTerraform(this._channelsAliim),
      channels_ding_web_hook: cdktf.stringToTerraform(this._channelsDingWebHook),
      channels_mail: cdktf.stringToTerraform(this._channelsMail),
      channels_sms: cdktf.stringToTerraform(this._channelsSms),
      describe: cdktf.stringToTerraform(this._describe),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_contact_name: {
        value: cdktf.stringToHclTerraform(this._alarmContactName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channels_ali_im: {
        value: cdktf.stringToHclTerraform(this._channelsAliIm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channels_aliim: {
        value: cdktf.stringToHclTerraform(this._channelsAliim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channels_ding_web_hook: {
        value: cdktf.stringToHclTerraform(this._channelsDingWebHook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channels_mail: {
        value: cdktf.stringToHclTerraform(this._channelsMail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channels_sms: {
        value: cdktf.stringToHclTerraform(this._channelsSms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      describe: {
        value: cdktf.stringToHclTerraform(this._describe),
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
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
