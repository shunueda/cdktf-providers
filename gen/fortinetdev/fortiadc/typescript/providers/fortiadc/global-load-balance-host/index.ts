// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalLoadBalanceHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#default_feedback_ip GlobalLoadBalanceHost#default_feedback_ip}
  */
  readonly defaultFeedbackIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#default_feedback_ip6 GlobalLoadBalanceHost#default_feedback_ip6}
  */
  readonly defaultFeedbackIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#dns_policy GlobalLoadBalanceHost#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#domain_name GlobalLoadBalanceHost#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#fortiview GlobalLoadBalanceHost#fortiview}
  */
  readonly fortiview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#host_name GlobalLoadBalanceHost#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#id GlobalLoadBalanceHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#load_balance_method GlobalLoadBalanceHost#load_balance_method}
  */
  readonly loadBalanceMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#mkey GlobalLoadBalanceHost#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#persistence GlobalLoadBalanceHost#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#respond_single_record GlobalLoadBalanceHost#respond_single_record}
  */
  readonly respondSingleRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#vdom GlobalLoadBalanceHost#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host fortiadc_global_load_balance_host}
*/
export class GlobalLoadBalanceHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_load_balance_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalLoadBalanceHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalLoadBalanceHost to import
  * @param importFromId The id of the existing GlobalLoadBalanceHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalLoadBalanceHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_load_balance_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_host fortiadc_global_load_balance_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalLoadBalanceHostConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalLoadBalanceHostConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_load_balance_host',
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
    this._defaultFeedbackIp = config.defaultFeedbackIp;
    this._defaultFeedbackIp6 = config.defaultFeedbackIp6;
    this._dnsPolicy = config.dnsPolicy;
    this._domainName = config.domainName;
    this._fortiview = config.fortiview;
    this._hostName = config.hostName;
    this._id = config.id;
    this._loadBalanceMethod = config.loadBalanceMethod;
    this._mkey = config.mkey;
    this._persistence = config.persistence;
    this._respondSingleRecord = config.respondSingleRecord;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_feedback_ip - computed: true, optional: true, required: false
  private _defaultFeedbackIp?: string; 
  public get defaultFeedbackIp() {
    return this.getStringAttribute('default_feedback_ip');
  }
  public set defaultFeedbackIp(value: string) {
    this._defaultFeedbackIp = value;
  }
  public resetDefaultFeedbackIp() {
    this._defaultFeedbackIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFeedbackIpInput() {
    return this._defaultFeedbackIp;
  }

  // default_feedback_ip6 - computed: true, optional: true, required: false
  private _defaultFeedbackIp6?: string; 
  public get defaultFeedbackIp6() {
    return this.getStringAttribute('default_feedback_ip6');
  }
  public set defaultFeedbackIp6(value: string) {
    this._defaultFeedbackIp6 = value;
  }
  public resetDefaultFeedbackIp6() {
    this._defaultFeedbackIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFeedbackIp6Input() {
    return this._defaultFeedbackIp6;
  }

  // dns_policy - computed: true, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // fortiview - computed: true, optional: true, required: false
  private _fortiview?: string; 
  public get fortiview() {
    return this.getStringAttribute('fortiview');
  }
  public set fortiview(value: string) {
    this._fortiview = value;
  }
  public resetFortiview() {
    this._fortiview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiviewInput() {
    return this._fortiview;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // load_balance_method - computed: true, optional: true, required: false
  private _loadBalanceMethod?: string; 
  public get loadBalanceMethod() {
    return this.getStringAttribute('load_balance_method');
  }
  public set loadBalanceMethod(value: string) {
    this._loadBalanceMethod = value;
  }
  public resetLoadBalanceMethod() {
    this._loadBalanceMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceMethodInput() {
    return this._loadBalanceMethod;
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

  // persistence - computed: true, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // respond_single_record - computed: true, optional: true, required: false
  private _respondSingleRecord?: string; 
  public get respondSingleRecord() {
    return this.getStringAttribute('respond_single_record');
  }
  public set respondSingleRecord(value: string) {
    this._respondSingleRecord = value;
  }
  public resetRespondSingleRecord() {
    this._respondSingleRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondSingleRecordInput() {
    return this._respondSingleRecord;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_feedback_ip: cdktf.stringToTerraform(this._defaultFeedbackIp),
      default_feedback_ip6: cdktf.stringToTerraform(this._defaultFeedbackIp6),
      dns_policy: cdktf.stringToTerraform(this._dnsPolicy),
      domain_name: cdktf.stringToTerraform(this._domainName),
      fortiview: cdktf.stringToTerraform(this._fortiview),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      load_balance_method: cdktf.stringToTerraform(this._loadBalanceMethod),
      mkey: cdktf.stringToTerraform(this._mkey),
      persistence: cdktf.stringToTerraform(this._persistence),
      respond_single_record: cdktf.stringToTerraform(this._respondSingleRecord),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_feedback_ip: {
        value: cdktf.stringToHclTerraform(this._defaultFeedbackIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_feedback_ip6: {
        value: cdktf.stringToHclTerraform(this._defaultFeedbackIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_policy: {
        value: cdktf.stringToHclTerraform(this._dnsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiview: {
        value: cdktf.stringToHclTerraform(this._fortiview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      load_balance_method: {
        value: cdktf.stringToHclTerraform(this._loadBalanceMethod),
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
      persistence: {
        value: cdktf.stringToHclTerraform(this._persistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_single_record: {
        value: cdktf.stringToHclTerraform(this._respondSingleRecord),
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
