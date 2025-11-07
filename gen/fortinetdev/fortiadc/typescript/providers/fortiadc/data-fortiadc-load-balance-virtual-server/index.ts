// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcLoadBalanceVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_virtual_server#id DataFortiadcLoadBalanceVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_virtual_server#mkey DataFortiadcLoadBalanceVirtualServer#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_virtual_server#vdom DataFortiadcLoadBalanceVirtualServer#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_virtual_server fortiadc_load_balance_virtual_server}
*/
export class DataFortiadcLoadBalanceVirtualServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcLoadBalanceVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcLoadBalanceVirtualServer to import
  * @param importFromId The id of the existing DataFortiadcLoadBalanceVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcLoadBalanceVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_virtual_server fortiadc_load_balance_virtual_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcLoadBalanceVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcLoadBalanceVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: true, optional: false, required: false
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // address6 - computed: true, optional: false, required: false
  public get address6() {
    return this.getStringAttribute('address6');
  }

  // adfs_published_service - computed: true, optional: false, required: false
  public get adfsPublishedService() {
    return this.getStringAttribute('adfs_published_service');
  }

  // alone - computed: true, optional: false, required: false
  public get alone() {
    return this.getStringAttribute('alone');
  }

  // auth_policy - computed: true, optional: false, required: false
  public get authPolicy() {
    return this.getStringAttribute('auth_policy');
  }

  // av_profile - computed: true, optional: false, required: false
  public get avProfile() {
    return this.getStringAttribute('av_profile');
  }

  // azure_lb_backend - computed: true, optional: false, required: false
  public get azureLbBackend() {
    return this.getStringAttribute('azure_lb_backend');
  }

  // captcha_profile - computed: true, optional: false, required: false
  public get captchaProfile() {
    return this.getStringAttribute('captcha_profile');
  }

  // client_ssl_profile - computed: true, optional: false, required: false
  public get clientSslProfile() {
    return this.getStringAttribute('client_ssl_profile');
  }

  // clone_pool - computed: true, optional: false, required: false
  public get clonePool() {
    return this.getStringAttribute('clone_pool');
  }

  // clone_traffic_type - computed: true, optional: false, required: false
  public get cloneTrafficType() {
    return this.getStringAttribute('clone_traffic_type');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // connection_limit - computed: true, optional: false, required: false
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }

  // connection_pool - computed: true, optional: false, required: false
  public get connectionPool() {
    return this.getStringAttribute('connection_pool');
  }

  // connection_rate_limit - computed: true, optional: false, required: false
  public get connectionRateLimit() {
    return this.getStringAttribute('connection_rate_limit');
  }

  // content_rewriting - computed: true, optional: false, required: false
  public get contentRewriting() {
    return this.getStringAttribute('content_rewriting');
  }

  // content_rewriting_list - computed: true, optional: false, required: false
  public get contentRewritingList() {
    return this.getStringAttribute('content_rewriting_list');
  }

  // content_routing - computed: true, optional: false, required: false
  public get contentRouting() {
    return this.getStringAttribute('content_routing');
  }

  // content_routing_list - computed: true, optional: false, required: false
  public get contentRoutingList() {
    return this.getStringAttribute('content_routing_list');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // dos_profile - computed: true, optional: false, required: false
  public get dosProfile() {
    return this.getStringAttribute('dos_profile');
  }

  // error_msg - computed: true, optional: false, required: false
  public get errorMsg() {
    return this.getStringAttribute('error_msg');
  }

  // error_page - computed: true, optional: false, required: false
  public get errorPage() {
    return this.getStringAttribute('error_page');
  }

  // fortiview - computed: true, optional: false, required: false
  public get fortiview() {
    return this.getStringAttribute('fortiview');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // http2https - computed: true, optional: false, required: false
  public get http2Https() {
    return this.getStringAttribute('http2https');
  }

  // http2https_port - computed: true, optional: false, required: false
  public get http2HttpsPort() {
    return this.getStringAttribute('http2https_port');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ips_profile - computed: true, optional: false, required: false
  public get ipsProfile() {
    return this.getStringAttribute('ips_profile');
  }

  // l2_exception_list - computed: true, optional: false, required: false
  public get l2ExceptionList() {
    return this.getStringAttribute('l2_exception_list');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // one_click_gslb_server - computed: true, optional: false, required: false
  public get oneClickGslbServer() {
    return this.getStringAttribute('one_click_gslb_server');
  }

  // packet_fwd_method - computed: true, optional: false, required: false
  public get packetFwdMethod() {
    return this.getStringAttribute('packet_fwd_method');
  }

  // pagespeed - computed: true, optional: false, required: false
  public get pagespeed() {
    return this.getStringAttribute('pagespeed');
  }

  // persistence - computed: true, optional: false, required: false
  public get persistence() {
    return this.getStringAttribute('persistence');
  }

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // public_ip6 - computed: true, optional: false, required: false
  public get publicIp6() {
    return this.getStringAttribute('public_ip6');
  }

  // public_ip_type - computed: true, optional: false, required: false
  public get publicIpType() {
    return this.getStringAttribute('public_ip_type');
  }

  // schedule_list - computed: true, optional: false, required: false
  public get scheduleList() {
    return this.getStringAttribute('schedule_list');
  }

  // schedule_pool_list - computed: true, optional: false, required: false
  public get schedulePoolList() {
    return this.getStringAttribute('schedule_pool_list');
  }

  // scripting_flag - computed: true, optional: false, required: false
  public get scriptingFlag() {
    return this.getStringAttribute('scripting_flag');
  }

  // scripting_list - computed: true, optional: false, required: false
  public get scriptingList() {
    return this.getStringAttribute('scripting_list');
  }

  // source_pool_list - computed: true, optional: false, required: false
  public get sourcePoolList() {
    return this.getStringAttribute('source_pool_list');
  }

  // ssl_mirror - computed: true, optional: false, required: false
  public get sslMirror() {
    return this.getStringAttribute('ssl_mirror');
  }

  // ssl_mirror_intf - computed: true, optional: false, required: false
  public get sslMirrorIntf() {
    return this.getStringAttribute('ssl_mirror_intf');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_scripting_flag - computed: true, optional: false, required: false
  public get streamScriptingFlag() {
    return this.getStringAttribute('stream_scripting_flag');
  }

  // stream_scripting_list - computed: true, optional: false, required: false
  public get streamScriptingList() {
    return this.getStringAttribute('stream_scripting_list');
  }

  // traffic_group - computed: true, optional: false, required: false
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }

  // traffic_log - computed: true, optional: false, required: false
  public get trafficLog() {
    return this.getStringAttribute('traffic_log');
  }

  // trans_rate_limit - computed: true, optional: false, required: false
  public get transRateLimit() {
    return this.getStringAttribute('trans_rate_limit');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_azure_lb_backend_ip - computed: true, optional: false, required: false
  public get useAzureLbBackendIp() {
    return this.getStringAttribute('use_azure_lb_backend_ip');
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // waf_profile - computed: true, optional: false, required: false
  public get wafProfile() {
    return this.getStringAttribute('waf_profile');
  }

  // warmrate - computed: true, optional: false, required: false
  public get warmrate() {
    return this.getStringAttribute('warmrate');
  }

  // warmup - computed: true, optional: false, required: false
  public get warmup() {
    return this.getStringAttribute('warmup');
  }

  // wccp - computed: true, optional: false, required: false
  public get wccp() {
    return this.getStringAttribute('wccp');
  }

  // ztna_profile - computed: true, optional: false, required: false
  public get ztnaProfile() {
    return this.getStringAttribute('ztna_profile');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
