// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWebfilterUrlfilterEntriesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#action ObjectWebfilterUrlfilterEntriesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#adom ObjectWebfilterUrlfilterEntriesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#antiphish_action ObjectWebfilterUrlfilterEntriesA#antiphish_action}
  */
  readonly antiphishAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#dns_address_family ObjectWebfilterUrlfilterEntriesA#dns_address_family}
  */
  readonly dnsAddressFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#exempt ObjectWebfilterUrlfilterEntriesA#exempt}
  */
  readonly exempt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#fosid ObjectWebfilterUrlfilterEntriesA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#id ObjectWebfilterUrlfilterEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#referrer_host ObjectWebfilterUrlfilterEntriesA#referrer_host}
  */
  readonly referrerHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#scopetype ObjectWebfilterUrlfilterEntriesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#status ObjectWebfilterUrlfilterEntriesA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#type ObjectWebfilterUrlfilterEntriesA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#url ObjectWebfilterUrlfilterEntriesA#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#urlfilter ObjectWebfilterUrlfilterEntriesA#urlfilter}
  */
  readonly urlfilter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#web_proxy_profile ObjectWebfilterUrlfilterEntriesA#web_proxy_profile}
  */
  readonly webProxyProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries fortimanager_object_webfilter_urlfilter_entries}
*/
export class ObjectWebfilterUrlfilterEntriesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_webfilter_urlfilter_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWebfilterUrlfilterEntriesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWebfilterUrlfilterEntriesA to import
  * @param importFromId The id of the existing ObjectWebfilterUrlfilterEntriesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWebfilterUrlfilterEntriesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_webfilter_urlfilter_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_webfilter_urlfilter_entries fortimanager_object_webfilter_urlfilter_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWebfilterUrlfilterEntriesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWebfilterUrlfilterEntriesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_webfilter_urlfilter_entries',
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
    this._action = config.action;
    this._adom = config.adom;
    this._antiphishAction = config.antiphishAction;
    this._dnsAddressFamily = config.dnsAddressFamily;
    this._exempt = config.exempt;
    this._fosid = config.fosid;
    this._id = config.id;
    this._referrerHost = config.referrerHost;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._type = config.type;
    this._url = config.url;
    this._urlfilter = config.urlfilter;
    this._webProxyProfile = config.webProxyProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
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

  // antiphish_action - computed: true, optional: true, required: false
  private _antiphishAction?: string; 
  public get antiphishAction() {
    return this.getStringAttribute('antiphish_action');
  }
  public set antiphishAction(value: string) {
    this._antiphishAction = value;
  }
  public resetAntiphishAction() {
    this._antiphishAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiphishActionInput() {
    return this._antiphishAction;
  }

  // dns_address_family - computed: true, optional: true, required: false
  private _dnsAddressFamily?: string; 
  public get dnsAddressFamily() {
    return this.getStringAttribute('dns_address_family');
  }
  public set dnsAddressFamily(value: string) {
    this._dnsAddressFamily = value;
  }
  public resetDnsAddressFamily() {
    this._dnsAddressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressFamilyInput() {
    return this._dnsAddressFamily;
  }

  // exempt - computed: true, optional: true, required: false
  private _exempt?: string[]; 
  public get exempt() {
    return cdktf.Fn.tolist(this.getListAttribute('exempt'));
  }
  public set exempt(value: string[]) {
    this._exempt = value;
  }
  public resetExempt() {
    this._exempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptInput() {
    return this._exempt;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // referrer_host - computed: false, optional: true, required: false
  private _referrerHost?: string; 
  public get referrerHost() {
    return this.getStringAttribute('referrer_host');
  }
  public set referrerHost(value: string) {
    this._referrerHost = value;
  }
  public resetReferrerHost() {
    this._referrerHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerHostInput() {
    return this._referrerHost;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // urlfilter - computed: false, optional: false, required: true
  private _urlfilter?: string; 
  public get urlfilter() {
    return this.getStringAttribute('urlfilter');
  }
  public set urlfilter(value: string) {
    this._urlfilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlfilterInput() {
    return this._urlfilter;
  }

  // web_proxy_profile - computed: false, optional: true, required: false
  private _webProxyProfile?: string; 
  public get webProxyProfile() {
    return this.getStringAttribute('web_proxy_profile');
  }
  public set webProxyProfile(value: string) {
    this._webProxyProfile = value;
  }
  public resetWebProxyProfile() {
    this._webProxyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webProxyProfileInput() {
    return this._webProxyProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      antiphish_action: cdktf.stringToTerraform(this._antiphishAction),
      dns_address_family: cdktf.stringToTerraform(this._dnsAddressFamily),
      exempt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exempt),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      referrer_host: cdktf.stringToTerraform(this._referrerHost),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      urlfilter: cdktf.stringToTerraform(this._urlfilter),
      web_proxy_profile: cdktf.stringToTerraform(this._webProxyProfile),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antiphish_action: {
        value: cdktf.stringToHclTerraform(this._antiphishAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_address_family: {
        value: cdktf.stringToHclTerraform(this._dnsAddressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exempt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exempt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      referrer_host: {
        value: cdktf.stringToHclTerraform(this._referrerHost),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urlfilter: {
        value: cdktf.stringToHclTerraform(this._urlfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_proxy_profile: {
        value: cdktf.stringToHclTerraform(this._webProxyProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
