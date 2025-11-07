// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectIcapProfileRespmodforwardrulesHeadergroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#adom ObjectIcapProfileRespmodforwardrulesHeadergroup#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#case_sensitivity ObjectIcapProfileRespmodforwardrulesHeadergroup#case_sensitivity}
  */
  readonly caseSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#fosid ObjectIcapProfileRespmodforwardrulesHeadergroup#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#header ObjectIcapProfileRespmodforwardrulesHeadergroup#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#header_name ObjectIcapProfileRespmodforwardrulesHeadergroup#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#id ObjectIcapProfileRespmodforwardrulesHeadergroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#profile ObjectIcapProfileRespmodforwardrulesHeadergroup#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#respmod_forward_rules ObjectIcapProfileRespmodforwardrulesHeadergroup#respmod_forward_rules}
  */
  readonly respmodForwardRules: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#scopetype ObjectIcapProfileRespmodforwardrulesHeadergroup#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup fortimanager_object_icap_profile_respmodforwardrules_headergroup}
*/
export class ObjectIcapProfileRespmodforwardrulesHeadergroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_icap_profile_respmodforwardrules_headergroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectIcapProfileRespmodforwardrulesHeadergroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectIcapProfileRespmodforwardrulesHeadergroup to import
  * @param importFromId The id of the existing ObjectIcapProfileRespmodforwardrulesHeadergroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectIcapProfileRespmodforwardrulesHeadergroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_icap_profile_respmodforwardrules_headergroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_icap_profile_respmodforwardrules_headergroup fortimanager_object_icap_profile_respmodforwardrules_headergroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectIcapProfileRespmodforwardrulesHeadergroupConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectIcapProfileRespmodforwardrulesHeadergroupConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_icap_profile_respmodforwardrules_headergroup',
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
    this._adom = config.adom;
    this._caseSensitivity = config.caseSensitivity;
    this._fosid = config.fosid;
    this._header = config.header;
    this._headerName = config.headerName;
    this._id = config.id;
    this._profile = config.profile;
    this._respmodForwardRules = config.respmodForwardRules;
    this._scopetype = config.scopetype;
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

  // case_sensitivity - computed: true, optional: true, required: false
  private _caseSensitivity?: string; 
  public get caseSensitivity() {
    return this.getStringAttribute('case_sensitivity');
  }
  public set caseSensitivity(value: string) {
    this._caseSensitivity = value;
  }
  public resetCaseSensitivity() {
    this._caseSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitivityInput() {
    return this._caseSensitivity;
  }

  // fosid - computed: true, optional: true, required: false
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

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // respmod_forward_rules - computed: false, optional: false, required: true
  private _respmodForwardRules?: string; 
  public get respmodForwardRules() {
    return this.getStringAttribute('respmod_forward_rules');
  }
  public set respmodForwardRules(value: string) {
    this._respmodForwardRules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get respmodForwardRulesInput() {
    return this._respmodForwardRules;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      case_sensitivity: cdktf.stringToTerraform(this._caseSensitivity),
      fosid: cdktf.numberToTerraform(this._fosid),
      header: cdktf.stringToTerraform(this._header),
      header_name: cdktf.stringToTerraform(this._headerName),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
      respmod_forward_rules: cdktf.stringToTerraform(this._respmodForwardRules),
      scopetype: cdktf.stringToTerraform(this._scopetype),
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
      case_sensitivity: {
        value: cdktf.stringToHclTerraform(this._caseSensitivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header: {
        value: cdktf.stringToHclTerraform(this._header),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respmod_forward_rules: {
        value: cdktf.stringToHclTerraform(this._respmodForwardRules),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
