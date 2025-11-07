// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityWafUrlProtectionChildFileExtensionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#exception_name SecurityWafUrlProtectionChildFileExtensionRule#exception_name}
  */
  readonly exceptionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#file_extension_rule_action SecurityWafUrlProtectionChildFileExtensionRule#file_extension_rule_action}
  */
  readonly fileExtensionRuleAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#file_extension_rule_regex SecurityWafUrlProtectionChildFileExtensionRule#file_extension_rule_regex}
  */
  readonly fileExtensionRuleRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#file_extension_rule_severity SecurityWafUrlProtectionChildFileExtensionRule#file_extension_rule_severity}
  */
  readonly fileExtensionRuleSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#id SecurityWafUrlProtectionChildFileExtensionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#mkey SecurityWafUrlProtectionChildFileExtensionRule#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#pkey SecurityWafUrlProtectionChildFileExtensionRule#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#vdom SecurityWafUrlProtectionChildFileExtensionRule#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule fortiadc_security_waf_url_protection_child_file_extension_rule}
*/
export class SecurityWafUrlProtectionChildFileExtensionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_waf_url_protection_child_file_extension_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityWafUrlProtectionChildFileExtensionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityWafUrlProtectionChildFileExtensionRule to import
  * @param importFromId The id of the existing SecurityWafUrlProtectionChildFileExtensionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityWafUrlProtectionChildFileExtensionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_waf_url_protection_child_file_extension_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_url_protection_child_file_extension_rule fortiadc_security_waf_url_protection_child_file_extension_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityWafUrlProtectionChildFileExtensionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityWafUrlProtectionChildFileExtensionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_waf_url_protection_child_file_extension_rule',
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
    this._exceptionName = config.exceptionName;
    this._fileExtensionRuleAction = config.fileExtensionRuleAction;
    this._fileExtensionRuleRegex = config.fileExtensionRuleRegex;
    this._fileExtensionRuleSeverity = config.fileExtensionRuleSeverity;
    this._id = config.id;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // file_extension_rule_action - computed: true, optional: true, required: false
  private _fileExtensionRuleAction?: string; 
  public get fileExtensionRuleAction() {
    return this.getStringAttribute('file_extension_rule_action');
  }
  public set fileExtensionRuleAction(value: string) {
    this._fileExtensionRuleAction = value;
  }
  public resetFileExtensionRuleAction() {
    this._fileExtensionRuleAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRuleActionInput() {
    return this._fileExtensionRuleAction;
  }

  // file_extension_rule_regex - computed: true, optional: true, required: false
  private _fileExtensionRuleRegex?: string; 
  public get fileExtensionRuleRegex() {
    return this.getStringAttribute('file_extension_rule_regex');
  }
  public set fileExtensionRuleRegex(value: string) {
    this._fileExtensionRuleRegex = value;
  }
  public resetFileExtensionRuleRegex() {
    this._fileExtensionRuleRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRuleRegexInput() {
    return this._fileExtensionRuleRegex;
  }

  // file_extension_rule_severity - computed: true, optional: true, required: false
  private _fileExtensionRuleSeverity?: string; 
  public get fileExtensionRuleSeverity() {
    return this.getStringAttribute('file_extension_rule_severity');
  }
  public set fileExtensionRuleSeverity(value: string) {
    this._fileExtensionRuleSeverity = value;
  }
  public resetFileExtensionRuleSeverity() {
    this._fileExtensionRuleSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionRuleSeverityInput() {
    return this._fileExtensionRuleSeverity;
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
      exception_name: cdktf.stringToTerraform(this._exceptionName),
      file_extension_rule_action: cdktf.stringToTerraform(this._fileExtensionRuleAction),
      file_extension_rule_regex: cdktf.stringToTerraform(this._fileExtensionRuleRegex),
      file_extension_rule_severity: cdktf.stringToTerraform(this._fileExtensionRuleSeverity),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exception_name: {
        value: cdktf.stringToHclTerraform(this._exceptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_extension_rule_action: {
        value: cdktf.stringToHclTerraform(this._fileExtensionRuleAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_extension_rule_regex: {
        value: cdktf.stringToHclTerraform(this._fileExtensionRuleRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_extension_rule_severity: {
        value: cdktf.stringToHclTerraform(this._fileExtensionRuleSeverity),
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
