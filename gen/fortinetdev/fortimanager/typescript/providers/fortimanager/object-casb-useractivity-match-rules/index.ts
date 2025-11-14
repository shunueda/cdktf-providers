// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCasbUseractivityMatchRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#adom ObjectCasbUseractivityMatchRulesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#body_type ObjectCasbUseractivityMatchRulesA#body_type}
  */
  readonly bodyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#case_sensitive ObjectCasbUseractivityMatchRulesA#case_sensitive}
  */
  readonly caseSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#domains ObjectCasbUseractivityMatchRulesA#domains}
  */
  readonly domains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#fosid ObjectCasbUseractivityMatchRulesA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#header_name ObjectCasbUseractivityMatchRulesA#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#id ObjectCasbUseractivityMatchRulesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#jq ObjectCasbUseractivityMatchRulesA#jq}
  */
  readonly jq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#match ObjectCasbUseractivityMatchRulesA#match}
  */
  readonly match: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#match_pattern ObjectCasbUseractivityMatchRulesA#match_pattern}
  */
  readonly matchPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#match_value ObjectCasbUseractivityMatchRulesA#match_value}
  */
  readonly matchValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#methods ObjectCasbUseractivityMatchRulesA#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#negate ObjectCasbUseractivityMatchRulesA#negate}
  */
  readonly negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#scopetype ObjectCasbUseractivityMatchRulesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#type ObjectCasbUseractivityMatchRulesA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#user_activity ObjectCasbUseractivityMatchRulesA#user_activity}
  */
  readonly userActivity: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules fortimanager_object_casb_useractivity_match_rules}
*/
export class ObjectCasbUseractivityMatchRulesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_casb_useractivity_match_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCasbUseractivityMatchRulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCasbUseractivityMatchRulesA to import
  * @param importFromId The id of the existing ObjectCasbUseractivityMatchRulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCasbUseractivityMatchRulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_casb_useractivity_match_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_casb_useractivity_match_rules fortimanager_object_casb_useractivity_match_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCasbUseractivityMatchRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectCasbUseractivityMatchRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_casb_useractivity_match_rules',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._bodyType = config.bodyType;
    this._caseSensitive = config.caseSensitive;
    this._domains = config.domains;
    this._fosid = config.fosid;
    this._headerName = config.headerName;
    this._id = config.id;
    this._jq = config.jq;
    this._match = config.match;
    this._matchPattern = config.matchPattern;
    this._matchValue = config.matchValue;
    this._methods = config.methods;
    this._negate = config.negate;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._userActivity = config.userActivity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // body_type - computed: true, optional: true, required: false
  private _bodyType?: string; 
  public get bodyType() {
    return this.getStringAttribute('body_type');
  }
  public set bodyType(value: string) {
    this._bodyType = value;
  }
  public resetBodyType() {
    this._bodyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTypeInput() {
    return this._bodyType;
  }

  // case_sensitive - computed: true, optional: true, required: false
  private _caseSensitive?: string; 
  public get caseSensitive() {
    return this.getStringAttribute('case_sensitive');
  }
  public set caseSensitive(value: string) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
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

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
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

  // jq - computed: false, optional: true, required: false
  private _jq?: string; 
  public get jq() {
    return this.getStringAttribute('jq');
  }
  public set jq(value: string) {
    this._jq = value;
  }
  public resetJq() {
    this._jq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqInput() {
    return this._jq;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_pattern - computed: true, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }

  // match_value - computed: false, optional: true, required: false
  private _matchValue?: string; 
  public get matchValue() {
    return this.getStringAttribute('match_value');
  }
  public set matchValue(value: string) {
    this._matchValue = value;
  }
  public resetMatchValue() {
    this._matchValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchValueInput() {
    return this._matchValue;
  }

  // methods - computed: true, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: string; 
  public get negate() {
    return this.getStringAttribute('negate');
  }
  public set negate(value: string) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

  // user_activity - computed: false, optional: false, required: true
  private _userActivity?: string; 
  public get userActivity() {
    return this.getStringAttribute('user_activity');
  }
  public set userActivity(value: string) {
    this._userActivity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userActivityInput() {
    return this._userActivity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      body_type: cdktf.stringToTerraform(this._bodyType),
      case_sensitive: cdktf.stringToTerraform(this._caseSensitive),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      fosid: cdktf.numberToTerraform(this._fosid),
      header_name: cdktf.stringToTerraform(this._headerName),
      id: cdktf.stringToTerraform(this._id),
      jq: cdktf.stringToTerraform(this._jq),
      match: cdktf.stringToTerraform(this._match),
      match_pattern: cdktf.stringToTerraform(this._matchPattern),
      match_value: cdktf.stringToTerraform(this._matchValue),
      methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._methods),
      negate: cdktf.stringToTerraform(this._negate),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      user_activity: cdktf.stringToTerraform(this._userActivity),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_type: {
        value: cdktf.stringToHclTerraform(this._bodyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case_sensitive: {
        value: cdktf.stringToHclTerraform(this._caseSensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
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
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
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
      jq: {
        value: cdktf.stringToHclTerraform(this._jq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match: {
        value: cdktf.stringToHclTerraform(this._match),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_pattern: {
        value: cdktf.stringToHclTerraform(this._matchPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_value: {
        value: cdktf.stringToHclTerraform(this._matchValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._methods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      negate: {
        value: cdktf.stringToHclTerraform(this._negate),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_activity: {
        value: cdktf.stringToHclTerraform(this._userActivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
