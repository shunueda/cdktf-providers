// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityWafExceptionChildExceptionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#exception_host SecurityWafExceptionChildExceptionRule#exception_host}
  */
  readonly exceptionHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#exception_host_status SecurityWafExceptionChildExceptionRule#exception_host_status}
  */
  readonly exceptionHostStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#exception_method SecurityWafExceptionChildExceptionRule#exception_method}
  */
  readonly exceptionMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#exception_name SecurityWafExceptionChildExceptionRule#exception_name}
  */
  readonly exceptionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#exception_url SecurityWafExceptionChildExceptionRule#exception_url}
  */
  readonly exceptionUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#exception_value SecurityWafExceptionChildExceptionRule#exception_value}
  */
  readonly exceptionValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#exception_value_check SecurityWafExceptionChildExceptionRule#exception_value_check}
  */
  readonly exceptionValueCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#id SecurityWafExceptionChildExceptionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#ip6_netmask SecurityWafExceptionChildExceptionRule#ip6_netmask}
  */
  readonly ip6Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#ip_netmask SecurityWafExceptionChildExceptionRule#ip_netmask}
  */
  readonly ipNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#mkey SecurityWafExceptionChildExceptionRule#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#pkey SecurityWafExceptionChildExceptionRule#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#type SecurityWafExceptionChildExceptionRule#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#vdom SecurityWafExceptionChildExceptionRule#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule fortiadc_security_waf_exception_child_exception_rule}
*/
export class SecurityWafExceptionChildExceptionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_waf_exception_child_exception_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityWafExceptionChildExceptionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityWafExceptionChildExceptionRule to import
  * @param importFromId The id of the existing SecurityWafExceptionChildExceptionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityWafExceptionChildExceptionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_waf_exception_child_exception_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_exception_child_exception_rule fortiadc_security_waf_exception_child_exception_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityWafExceptionChildExceptionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityWafExceptionChildExceptionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_waf_exception_child_exception_rule',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exceptionHost = config.exceptionHost;
    this._exceptionHostStatus = config.exceptionHostStatus;
    this._exceptionMethod = config.exceptionMethod;
    this._exceptionName = config.exceptionName;
    this._exceptionUrl = config.exceptionUrl;
    this._exceptionValue = config.exceptionValue;
    this._exceptionValueCheck = config.exceptionValueCheck;
    this._id = config.id;
    this._ip6Netmask = config.ip6Netmask;
    this._ipNetmask = config.ipNetmask;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._type = config.type;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exception_host - computed: true, optional: true, required: false
  private _exceptionHost?: string; 
  public get exceptionHost() {
    return this.getStringAttribute('exception_host');
  }
  public set exceptionHost(value: string) {
    this._exceptionHost = value;
  }
  public resetExceptionHost() {
    this._exceptionHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionHostInput() {
    return this._exceptionHost;
  }

  // exception_host_status - computed: true, optional: true, required: false
  private _exceptionHostStatus?: string; 
  public get exceptionHostStatus() {
    return this.getStringAttribute('exception_host_status');
  }
  public set exceptionHostStatus(value: string) {
    this._exceptionHostStatus = value;
  }
  public resetExceptionHostStatus() {
    this._exceptionHostStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionHostStatusInput() {
    return this._exceptionHostStatus;
  }

  // exception_method - computed: true, optional: true, required: false
  private _exceptionMethod?: string; 
  public get exceptionMethod() {
    return this.getStringAttribute('exception_method');
  }
  public set exceptionMethod(value: string) {
    this._exceptionMethod = value;
  }
  public resetExceptionMethod() {
    this._exceptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionMethodInput() {
    return this._exceptionMethod;
  }

  // exception_name - computed: true, optional: true, required: false
  private _exceptionName?: string; 
  public get exceptionName() {
    return this.getStringAttribute('exception_name');
  }
  public set exceptionName(value: string) {
    this._exceptionName = value;
  }
  public resetExceptionName() {
    this._exceptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionNameInput() {
    return this._exceptionName;
  }

  // exception_url - computed: true, optional: true, required: false
  private _exceptionUrl?: string; 
  public get exceptionUrl() {
    return this.getStringAttribute('exception_url');
  }
  public set exceptionUrl(value: string) {
    this._exceptionUrl = value;
  }
  public resetExceptionUrl() {
    this._exceptionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionUrlInput() {
    return this._exceptionUrl;
  }

  // exception_value - computed: true, optional: true, required: false
  private _exceptionValue?: string; 
  public get exceptionValue() {
    return this.getStringAttribute('exception_value');
  }
  public set exceptionValue(value: string) {
    this._exceptionValue = value;
  }
  public resetExceptionValue() {
    this._exceptionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionValueInput() {
    return this._exceptionValue;
  }

  // exception_value_check - computed: true, optional: true, required: false
  private _exceptionValueCheck?: string; 
  public get exceptionValueCheck() {
    return this.getStringAttribute('exception_value_check');
  }
  public set exceptionValueCheck(value: string) {
    this._exceptionValueCheck = value;
  }
  public resetExceptionValueCheck() {
    this._exceptionValueCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionValueCheckInput() {
    return this._exceptionValueCheck;
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

  // ip6_netmask - computed: true, optional: true, required: false
  private _ip6Netmask?: string; 
  public get ip6Netmask() {
    return this.getStringAttribute('ip6_netmask');
  }
  public set ip6Netmask(value: string) {
    this._ip6Netmask = value;
  }
  public resetIp6Netmask() {
    this._ip6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6NetmaskInput() {
    return this._ip6Netmask;
  }

  // ip_netmask - computed: true, optional: true, required: false
  private _ipNetmask?: string; 
  public get ipNetmask() {
    return this.getStringAttribute('ip_netmask');
  }
  public set ipNetmask(value: string) {
    this._ipNetmask = value;
  }
  public resetIpNetmask() {
    this._ipNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetmaskInput() {
    return this._ipNetmask;
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

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
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
      exception_host: cdktf.stringToTerraform(this._exceptionHost),
      exception_host_status: cdktf.stringToTerraform(this._exceptionHostStatus),
      exception_method: cdktf.stringToTerraform(this._exceptionMethod),
      exception_name: cdktf.stringToTerraform(this._exceptionName),
      exception_url: cdktf.stringToTerraform(this._exceptionUrl),
      exception_value: cdktf.stringToTerraform(this._exceptionValue),
      exception_value_check: cdktf.stringToTerraform(this._exceptionValueCheck),
      id: cdktf.stringToTerraform(this._id),
      ip6_netmask: cdktf.stringToTerraform(this._ip6Netmask),
      ip_netmask: cdktf.stringToTerraform(this._ipNetmask),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exception_host: {
        value: cdktf.stringToHclTerraform(this._exceptionHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_host_status: {
        value: cdktf.stringToHclTerraform(this._exceptionHostStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_method: {
        value: cdktf.stringToHclTerraform(this._exceptionMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_name: {
        value: cdktf.stringToHclTerraform(this._exceptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_url: {
        value: cdktf.stringToHclTerraform(this._exceptionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_value: {
        value: cdktf.stringToHclTerraform(this._exceptionValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_value_check: {
        value: cdktf.stringToHclTerraform(this._exceptionValueCheck),
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
      ip6_netmask: {
        value: cdktf.stringToHclTerraform(this._ip6Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_netmask: {
        value: cdktf.stringToHclTerraform(this._ipNetmask),
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
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
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
