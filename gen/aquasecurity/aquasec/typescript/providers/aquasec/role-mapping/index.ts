// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#id RoleMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#ldap RoleMapping#ldap}
  */
  readonly ldap?: RoleMappingLdap;
  /**
  * oauth2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#oauth2 RoleMapping#oauth2}
  */
  readonly oauth2?: RoleMappingOauth2;
  /**
  * openid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#openid RoleMapping#openid}
  */
  readonly openid?: RoleMappingOpenid;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#saml RoleMapping#saml}
  */
  readonly saml?: RoleMappingSaml;
}
export interface RoleMappingLdap {
  /**
  * Role Mapping is used to define the IdP role that the user will assume in Aqua. Use '|' as a separator for multiple roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#role_mapping RoleMapping#role_mapping}
  */
  readonly roleMapping: { [key: string]: string };
}

export function roleMappingLdapToTerraform(struct?: RoleMappingLdapOutputReference | RoleMappingLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.roleMapping),
  }
}


export function roleMappingLdapToHclTerraform(struct?: RoleMappingLdapOutputReference | RoleMappingLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.roleMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleMappingLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleMappingLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleMapping = this._roleMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleMappingLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleMapping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleMapping = value.roleMapping;
    }
  }

  // role_mapping - computed: false, optional: false, required: true
  private _roleMapping?: { [key: string]: string }; 
  public get roleMapping() {
    return this.getStringMapAttribute('role_mapping');
  }
  public set roleMapping(value: { [key: string]: string }) {
    this._roleMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMappingInput() {
    return this._roleMapping;
  }
}
export interface RoleMappingOauth2 {
  /**
  * Role Mapping is used to define the IdP role that the user will assume in Aqua. Use '|' as a separator for multiple roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#role_mapping RoleMapping#role_mapping}
  */
  readonly roleMapping: { [key: string]: string };
}

export function roleMappingOauth2ToTerraform(struct?: RoleMappingOauth2OutputReference | RoleMappingOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.roleMapping),
  }
}


export function roleMappingOauth2ToHclTerraform(struct?: RoleMappingOauth2OutputReference | RoleMappingOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.roleMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleMappingOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleMappingOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleMapping = this._roleMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleMappingOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleMapping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleMapping = value.roleMapping;
    }
  }

  // role_mapping - computed: false, optional: false, required: true
  private _roleMapping?: { [key: string]: string }; 
  public get roleMapping() {
    return this.getStringMapAttribute('role_mapping');
  }
  public set roleMapping(value: { [key: string]: string }) {
    this._roleMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMappingInput() {
    return this._roleMapping;
  }
}
export interface RoleMappingOpenid {
  /**
  * Role Mapping is used to define the IdP role that the user will assume in Aqua. Use '|' as a separator for multiple roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#role_mapping RoleMapping#role_mapping}
  */
  readonly roleMapping: { [key: string]: string };
}

export function roleMappingOpenidToTerraform(struct?: RoleMappingOpenidOutputReference | RoleMappingOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.roleMapping),
  }
}


export function roleMappingOpenidToHclTerraform(struct?: RoleMappingOpenidOutputReference | RoleMappingOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.roleMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleMappingOpenidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleMappingOpenid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleMapping = this._roleMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleMappingOpenid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleMapping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleMapping = value.roleMapping;
    }
  }

  // role_mapping - computed: false, optional: false, required: true
  private _roleMapping?: { [key: string]: string }; 
  public get roleMapping() {
    return this.getStringMapAttribute('role_mapping');
  }
  public set roleMapping(value: { [key: string]: string }) {
    this._roleMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMappingInput() {
    return this._roleMapping;
  }
}
export interface RoleMappingSaml {
  /**
  * Role Mapping is used to define the IdP role that the user will assume in Aqua. Use '|' as a separator for multiple roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#role_mapping RoleMapping#role_mapping}
  */
  readonly roleMapping: { [key: string]: string };
}

export function roleMappingSamlToTerraform(struct?: RoleMappingSamlOutputReference | RoleMappingSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.roleMapping),
  }
}


export function roleMappingSamlToHclTerraform(struct?: RoleMappingSamlOutputReference | RoleMappingSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.roleMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleMappingSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleMappingSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleMapping = this._roleMapping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleMappingSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleMapping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleMapping = value.roleMapping;
    }
  }

  // role_mapping - computed: false, optional: false, required: true
  private _roleMapping?: { [key: string]: string }; 
  public get roleMapping() {
    return this.getStringMapAttribute('role_mapping');
  }
  public set roleMapping(value: { [key: string]: string }) {
    this._roleMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMappingInput() {
    return this._roleMapping;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping aquasec_role_mapping}
*/
export class RoleMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_role_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleMapping to import
  * @param importFromId The id of the existing RoleMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_role_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/role_mapping aquasec_role_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleMappingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RoleMappingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aquasec_role_mapping',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
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
    this._ldap.internalValue = config.ldap;
    this._oauth2.internalValue = config.oauth2;
    this._openid.internalValue = config.openid;
    this._saml.internalValue = config.saml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ldap - computed: false, optional: true, required: false
  private _ldap = new RoleMappingLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: RoleMappingLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new RoleMappingOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: RoleMappingOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // openid - computed: false, optional: true, required: false
  private _openid = new RoleMappingOpenidOutputReference(this, "openid");
  public get openid() {
    return this._openid;
  }
  public putOpenid(value: RoleMappingOpenid) {
    this._openid.internalValue = value;
  }
  public resetOpenid() {
    this._openid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidInput() {
    return this._openid.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new RoleMappingSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: RoleMappingSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ldap: roleMappingLdapToTerraform(this._ldap.internalValue),
      oauth2: roleMappingOauth2ToTerraform(this._oauth2.internalValue),
      openid: roleMappingOpenidToTerraform(this._openid.internalValue),
      saml: roleMappingSamlToTerraform(this._saml.internalValue),
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
      ldap: {
        value: roleMappingLdapToHclTerraform(this._ldap.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleMappingLdapList",
      },
      oauth2: {
        value: roleMappingOauth2ToHclTerraform(this._oauth2.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleMappingOauth2List",
      },
      openid: {
        value: roleMappingOpenidToHclTerraform(this._openid.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleMappingOpenidList",
      },
      saml: {
        value: roleMappingSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleMappingSamlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
