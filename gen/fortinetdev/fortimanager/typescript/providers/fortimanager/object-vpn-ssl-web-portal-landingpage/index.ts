// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnSslWebPortalLandingpageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#adom ObjectVpnSslWebPortalLandingpage#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#dynamic_sort_subtable ObjectVpnSslWebPortalLandingpage#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#id ObjectVpnSslWebPortalLandingpage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#logout_url ObjectVpnSslWebPortalLandingpage#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#portal ObjectVpnSslWebPortalLandingpage#portal}
  */
  readonly portal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#scopetype ObjectVpnSslWebPortalLandingpage#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#sso ObjectVpnSslWebPortalLandingpage#sso}
  */
  readonly sso?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#sso_credential ObjectVpnSslWebPortalLandingpage#sso_credential}
  */
  readonly ssoCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#sso_password ObjectVpnSslWebPortalLandingpage#sso_password}
  */
  readonly ssoPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#sso_username ObjectVpnSslWebPortalLandingpage#sso_username}
  */
  readonly ssoUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#url ObjectVpnSslWebPortalLandingpage#url}
  */
  readonly url?: string;
  /**
  * form_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#form_data ObjectVpnSslWebPortalLandingpage#form_data}
  */
  readonly formData?: ObjectVpnSslWebPortalLandingpageFormData[] | cdktf.IResolvable;
}
export interface ObjectVpnSslWebPortalLandingpageFormData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#name ObjectVpnSslWebPortalLandingpage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#value ObjectVpnSslWebPortalLandingpage#value}
  */
  readonly value?: string;
}

export function objectVpnSslWebPortalLandingpageFormDataToTerraform(struct?: ObjectVpnSslWebPortalLandingpageFormData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectVpnSslWebPortalLandingpageFormDataToHclTerraform(struct?: ObjectVpnSslWebPortalLandingpageFormData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectVpnSslWebPortalLandingpageFormDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectVpnSslWebPortalLandingpageFormData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectVpnSslWebPortalLandingpageFormData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObjectVpnSslWebPortalLandingpageFormDataList extends cdktf.ComplexList {
  public internalValue? : ObjectVpnSslWebPortalLandingpageFormData[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectVpnSslWebPortalLandingpageFormDataOutputReference {
    return new ObjectVpnSslWebPortalLandingpageFormDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage fortimanager_object_vpn_ssl_web_portal_landingpage}
*/
export class ObjectVpnSslWebPortalLandingpage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ssl_web_portal_landingpage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnSslWebPortalLandingpage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnSslWebPortalLandingpage to import
  * @param importFromId The id of the existing ObjectVpnSslWebPortalLandingpage that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnSslWebPortalLandingpage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ssl_web_portal_landingpage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_landingpage fortimanager_object_vpn_ssl_web_portal_landingpage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnSslWebPortalLandingpageConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnSslWebPortalLandingpageConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ssl_web_portal_landingpage',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._logoutUrl = config.logoutUrl;
    this._portal = config.portal;
    this._scopetype = config.scopetype;
    this._sso = config.sso;
    this._ssoCredential = config.ssoCredential;
    this._ssoPassword = config.ssoPassword;
    this._ssoUsername = config.ssoUsername;
    this._url = config.url;
    this._formData.internalValue = config.formData;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
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

  // logout_url - computed: false, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // portal - computed: false, optional: false, required: true
  private _portal?: string; 
  public get portal() {
    return this.getStringAttribute('portal');
  }
  public set portal(value: string) {
    this._portal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal;
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

  // sso - computed: true, optional: true, required: false
  private _sso?: string; 
  public get sso() {
    return this.getStringAttribute('sso');
  }
  public set sso(value: string) {
    this._sso = value;
  }
  public resetSso() {
    this._sso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso;
  }

  // sso_credential - computed: true, optional: true, required: false
  private _ssoCredential?: string; 
  public get ssoCredential() {
    return this.getStringAttribute('sso_credential');
  }
  public set ssoCredential(value: string) {
    this._ssoCredential = value;
  }
  public resetSsoCredential() {
    this._ssoCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoCredentialInput() {
    return this._ssoCredential;
  }

  // sso_password - computed: true, optional: true, required: false
  private _ssoPassword?: string[]; 
  public get ssoPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_password'));
  }
  public set ssoPassword(value: string[]) {
    this._ssoPassword = value;
  }
  public resetSsoPassword() {
    this._ssoPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoPasswordInput() {
    return this._ssoPassword;
  }

  // sso_username - computed: false, optional: true, required: false
  private _ssoUsername?: string; 
  public get ssoUsername() {
    return this.getStringAttribute('sso_username');
  }
  public set ssoUsername(value: string) {
    this._ssoUsername = value;
  }
  public resetSsoUsername() {
    this._ssoUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUsernameInput() {
    return this._ssoUsername;
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

  // form_data - computed: false, optional: true, required: false
  private _formData = new ObjectVpnSslWebPortalLandingpageFormDataList(this, "form_data", false);
  public get formData() {
    return this._formData;
  }
  public putFormData(value: ObjectVpnSslWebPortalLandingpageFormData[] | cdktf.IResolvable) {
    this._formData.internalValue = value;
  }
  public resetFormData() {
    this._formData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formDataInput() {
    return this._formData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      portal: cdktf.stringToTerraform(this._portal),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sso: cdktf.stringToTerraform(this._sso),
      sso_credential: cdktf.stringToTerraform(this._ssoCredential),
      sso_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssoPassword),
      sso_username: cdktf.stringToTerraform(this._ssoUsername),
      url: cdktf.stringToTerraform(this._url),
      form_data: cdktf.listMapper(objectVpnSslWebPortalLandingpageFormDataToTerraform, true)(this._formData.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal: {
        value: cdktf.stringToHclTerraform(this._portal),
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
      sso: {
        value: cdktf.stringToHclTerraform(this._sso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_credential: {
        value: cdktf.stringToHclTerraform(this._ssoCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssoPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sso_username: {
        value: cdktf.stringToHclTerraform(this._ssoUsername),
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
      form_data: {
        value: cdktf.listMapperHcl(objectVpnSslWebPortalLandingpageFormDataToHclTerraform, true)(this._formData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectVpnSslWebPortalLandingpageFormDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
