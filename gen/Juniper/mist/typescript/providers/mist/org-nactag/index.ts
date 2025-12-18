// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgNactagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can be set to true to allow the override by usermac result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#allow_usermac_override OrgNactag#allow_usermac_override}
  */
  readonly allowUsermacOverride?: boolean | cdktf.IResolvable;
  /**
  * If `type`==`egress_vlan_names`, list of egress vlans to return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#egress_vlan_names OrgNactag#egress_vlan_names}
  */
  readonly egressVlanNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#gbp_tag OrgNactag#gbp_tag}
  */
  readonly gbpTag?: string;
  /**
  * if `type`==`match`. enum: `cert_cn`, `cert_eku`, `cert_issuer`, `cert_san`, `cert_serial`, `cert_sub`, `cert_template`, `client_mac`, `edr_status`, `gbp_tag`, `hostname`, `idp_role`, `ingress_vlan`, `mdm_status`, `nas_ip`, `radius_group`, `realm`, `ssid`, `user_name`, `usermac_label`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#match OrgNactag#match}
  */
  readonly match?: string;
  /**
  * This field is applicable only when `type`==`match`
  *   * `false`: means it is sufficient to match any of the values (i.e., match-any behavior)
  *   * `true`: means all values should be matched (i.e., match-all behavior)
  * 
  * 
  * Currently it makes sense to set this field to `true` only if the `match`==`idp_role`, `match`==`usermac_label` and `edr_status`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#match_all OrgNactag#match_all}
  */
  readonly matchAll?: boolean | cdktf.IResolvable;
  /**
  * If `type`==`redirect_nacportal_id`, the ID of the NAC portal to redirect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#nacportal_id OrgNactag#nacportal_id}
  */
  readonly nacportalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#name OrgNactag#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#org_id OrgNactag#org_id}
  */
  readonly orgId: string;
  /**
  * If `type`==`radius_attrs`, user can specify a list of one or more standard attributes in the field "radius_attrs". 
  * It is the responsibility of the user to provide a syntactically correct string, otherwise it may not work as expected.
  * Note that it is allowed to have more than one radius_attrs in the result of a given rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#radius_attrs OrgNactag#radius_attrs}
  */
  readonly radiusAttrs?: string[];
  /**
  * If `type`==`radius_group`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#radius_group OrgNactag#radius_group}
  */
  readonly radiusGroup?: string;
  /**
  * If `type`==`radius_vendor_attrs`, user can specify a list of one or more vendor-specific attributes in the field "radius_vendor_attrs". 
  * It is the responsibility of the user to provide a syntactically correct string, otherwise it may not work as expected.
  * Note that it is allowed to have more than one radius_vendor_attrs in the result of a given rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#radius_vendor_attrs OrgNactag#radius_vendor_attrs}
  */
  readonly radiusVendorAttrs?: string[];
  /**
  * If `type`==`session_timeout, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#session_timeout OrgNactag#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * enum: `egress_vlan_names`, `gbp_tag`, `match`, `radius_attrs`, `radius_group`, `radius_vendor_attrs`, `redirect_nacportal_id`, `session_timeout`, `username_attr`, `vlan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#type OrgNactag#type}
  */
  readonly type: string;
  /**
  * enum: `automatic`, `cn`, `dns`, `email`, `upn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#username_attr OrgNactag#username_attr}
  */
  readonly usernameAttr?: string;
  /**
  * If `type`==`match`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#values OrgNactag#values}
  */
  readonly values?: string[];
  /**
  * If `type`==`vlan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#vlan OrgNactag#vlan}
  */
  readonly vlan?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag mist_org_nactag}
*/
export class OrgNactag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_nactag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgNactag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgNactag to import
  * @param importFromId The id of the existing OrgNactag that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgNactag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_nactag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_nactag mist_org_nactag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgNactagConfig
  */
  public constructor(scope: Construct, id: string, config: OrgNactagConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_nactag',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUsermacOverride = config.allowUsermacOverride;
    this._egressVlanNames = config.egressVlanNames;
    this._gbpTag = config.gbpTag;
    this._match = config.match;
    this._matchAll = config.matchAll;
    this._nacportalId = config.nacportalId;
    this._name = config.name;
    this._orgId = config.orgId;
    this._radiusAttrs = config.radiusAttrs;
    this._radiusGroup = config.radiusGroup;
    this._radiusVendorAttrs = config.radiusVendorAttrs;
    this._sessionTimeout = config.sessionTimeout;
    this._type = config.type;
    this._usernameAttr = config.usernameAttr;
    this._values = config.values;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_usermac_override - computed: false, optional: true, required: false
  private _allowUsermacOverride?: boolean | cdktf.IResolvable; 
  public get allowUsermacOverride() {
    return this.getBooleanAttribute('allow_usermac_override');
  }
  public set allowUsermacOverride(value: boolean | cdktf.IResolvable) {
    this._allowUsermacOverride = value;
  }
  public resetAllowUsermacOverride() {
    this._allowUsermacOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUsermacOverrideInput() {
    return this._allowUsermacOverride;
  }

  // egress_vlan_names - computed: false, optional: true, required: false
  private _egressVlanNames?: string[]; 
  public get egressVlanNames() {
    return this.getListAttribute('egress_vlan_names');
  }
  public set egressVlanNames(value: string[]) {
    this._egressVlanNames = value;
  }
  public resetEgressVlanNames() {
    this._egressVlanNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressVlanNamesInput() {
    return this._egressVlanNames;
  }

  // gbp_tag - computed: false, optional: true, required: false
  private _gbpTag?: string; 
  public get gbpTag() {
    return this.getStringAttribute('gbp_tag');
  }
  public set gbpTag(value: string) {
    this._gbpTag = value;
  }
  public resetGbpTag() {
    this._gbpTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbpTagInput() {
    return this._gbpTag;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // match_all - computed: false, optional: true, required: false
  private _matchAll?: boolean | cdktf.IResolvable; 
  public get matchAll() {
    return this.getBooleanAttribute('match_all');
  }
  public set matchAll(value: boolean | cdktf.IResolvable) {
    this._matchAll = value;
  }
  public resetMatchAll() {
    this._matchAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAllInput() {
    return this._matchAll;
  }

  // nacportal_id - computed: false, optional: true, required: false
  private _nacportalId?: string; 
  public get nacportalId() {
    return this.getStringAttribute('nacportal_id');
  }
  public set nacportalId(value: string) {
    this._nacportalId = value;
  }
  public resetNacportalId() {
    this._nacportalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacportalIdInput() {
    return this._nacportalId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // radius_attrs - computed: false, optional: true, required: false
  private _radiusAttrs?: string[]; 
  public get radiusAttrs() {
    return this.getListAttribute('radius_attrs');
  }
  public set radiusAttrs(value: string[]) {
    this._radiusAttrs = value;
  }
  public resetRadiusAttrs() {
    this._radiusAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusAttrsInput() {
    return this._radiusAttrs;
  }

  // radius_group - computed: false, optional: true, required: false
  private _radiusGroup?: string; 
  public get radiusGroup() {
    return this.getStringAttribute('radius_group');
  }
  public set radiusGroup(value: string) {
    this._radiusGroup = value;
  }
  public resetRadiusGroup() {
    this._radiusGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusGroupInput() {
    return this._radiusGroup;
  }

  // radius_vendor_attrs - computed: false, optional: true, required: false
  private _radiusVendorAttrs?: string[]; 
  public get radiusVendorAttrs() {
    return this.getListAttribute('radius_vendor_attrs');
  }
  public set radiusVendorAttrs(value: string[]) {
    this._radiusVendorAttrs = value;
  }
  public resetRadiusVendorAttrs() {
    this._radiusVendorAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusVendorAttrsInput() {
    return this._radiusVendorAttrs;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
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

  // username_attr - computed: false, optional: true, required: false
  private _usernameAttr?: string; 
  public get usernameAttr() {
    return this.getStringAttribute('username_attr');
  }
  public set usernameAttr(value: string) {
    this._usernameAttr = value;
  }
  public resetUsernameAttr() {
    this._usernameAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttrInput() {
    return this._usernameAttr;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_usermac_override: cdktf.booleanToTerraform(this._allowUsermacOverride),
      egress_vlan_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._egressVlanNames),
      gbp_tag: cdktf.stringToTerraform(this._gbpTag),
      match: cdktf.stringToTerraform(this._match),
      match_all: cdktf.booleanToTerraform(this._matchAll),
      nacportal_id: cdktf.stringToTerraform(this._nacportalId),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      radius_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._radiusAttrs),
      radius_group: cdktf.stringToTerraform(this._radiusGroup),
      radius_vendor_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._radiusVendorAttrs),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      type: cdktf.stringToTerraform(this._type),
      username_attr: cdktf.stringToTerraform(this._usernameAttr),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
      vlan: cdktf.stringToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_usermac_override: {
        value: cdktf.booleanToHclTerraform(this._allowUsermacOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      egress_vlan_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._egressVlanNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gbp_tag: {
        value: cdktf.stringToHclTerraform(this._gbpTag),
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
      match_all: {
        value: cdktf.booleanToHclTerraform(this._matchAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nacportal_id: {
        value: cdktf.stringToHclTerraform(this._nacportalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_attrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._radiusAttrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      radius_group: {
        value: cdktf.stringToHclTerraform(this._radiusGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_vendor_attrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._radiusVendorAttrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_attr: {
        value: cdktf.stringToHclTerraform(this._usernameAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
