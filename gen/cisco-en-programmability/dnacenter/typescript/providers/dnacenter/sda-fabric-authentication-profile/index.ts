// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaFabricAuthenticationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#id SdaFabricAuthenticationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#parameters SdaFabricAuthenticationProfile#parameters}
  */
  readonly parameters: SdaFabricAuthenticationProfileParameters;
}
export interface SdaFabricAuthenticationProfileItem {
}

export function sdaFabricAuthenticationProfileItemToTerraform(struct?: SdaFabricAuthenticationProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaFabricAuthenticationProfileItemToHclTerraform(struct?: SdaFabricAuthenticationProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaFabricAuthenticationProfileItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaFabricAuthenticationProfileItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricAuthenticationProfileItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authenticate_template_name - computed: true, optional: false, required: false
  public get authenticateTemplateName() {
    return this.getStringAttribute('authenticate_template_name');
  }

  // authentication_order - computed: true, optional: false, required: false
  public get authenticationOrder() {
    return this.getStringAttribute('authentication_order');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dot1x_to_mab_fallback_timeout - computed: true, optional: false, required: false
  public get dot1XToMabFallbackTimeout() {
    return this.getStringAttribute('dot1x_to_mab_fallback_timeout');
  }

  // number_of_hosts - computed: true, optional: false, required: false
  public get numberOfHosts() {
    return this.getStringAttribute('number_of_hosts');
  }

  // site_name_hierarchy - computed: true, optional: false, required: false
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // wake_on_lan - computed: true, optional: false, required: false
  public get wakeOnLan() {
    return this.getStringAttribute('wake_on_lan');
  }
}

export class SdaFabricAuthenticationProfileItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaFabricAuthenticationProfileItemOutputReference {
    return new SdaFabricAuthenticationProfileItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricAuthenticationProfileParametersPayload {
  /**
  * Authenticate Template Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#authenticate_template_name SdaFabricAuthenticationProfile#authenticate_template_name}
  */
  readonly authenticateTemplateName?: string;
  /**
  * Authentication Order
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#authentication_order SdaFabricAuthenticationProfile#authentication_order}
  */
  readonly authenticationOrder?: string;
  /**
  * Dot1x To MabFallback Timeout( Allowed range is [3-120])
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#dot1x_to_mab_fallback_timeout SdaFabricAuthenticationProfile#dot1x_to_mab_fallback_timeout}
  */
  readonly dot1XToMabFallbackTimeout?: string;
  /**
  * Number Of Hosts
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#number_of_hosts SdaFabricAuthenticationProfile#number_of_hosts}
  */
  readonly numberOfHosts?: string;
  /**
  * Path of sda Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#site_name_hierarchy SdaFabricAuthenticationProfile#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
  /**
  * Wake On Lan
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#wake_on_lan SdaFabricAuthenticationProfile#wake_on_lan}
  */
  readonly wakeOnLan?: string;
}

export function sdaFabricAuthenticationProfileParametersPayloadToTerraform(struct?: SdaFabricAuthenticationProfileParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticate_template_name: cdktf.stringToTerraform(struct!.authenticateTemplateName),
    authentication_order: cdktf.stringToTerraform(struct!.authenticationOrder),
    dot1x_to_mab_fallback_timeout: cdktf.stringToTerraform(struct!.dot1XToMabFallbackTimeout),
    number_of_hosts: cdktf.stringToTerraform(struct!.numberOfHosts),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
    wake_on_lan: cdktf.stringToTerraform(struct!.wakeOnLan),
  }
}


export function sdaFabricAuthenticationProfileParametersPayloadToHclTerraform(struct?: SdaFabricAuthenticationProfileParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticate_template_name: {
      value: cdktf.stringToHclTerraform(struct!.authenticateTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_order: {
      value: cdktf.stringToHclTerraform(struct!.authenticationOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot1x_to_mab_fallback_timeout: {
      value: cdktf.stringToHclTerraform(struct!.dot1XToMabFallbackTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_hosts: {
      value: cdktf.stringToHclTerraform(struct!.numberOfHosts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wake_on_lan: {
      value: cdktf.stringToHclTerraform(struct!.wakeOnLan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricAuthenticationProfileParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaFabricAuthenticationProfileParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticateTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateTemplateName = this._authenticateTemplateName;
    }
    if (this._authenticationOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationOrder = this._authenticationOrder;
    }
    if (this._dot1XToMabFallbackTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1XToMabFallbackTimeout = this._dot1XToMabFallbackTimeout;
    }
    if (this._numberOfHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfHosts = this._numberOfHosts;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    if (this._wakeOnLan !== undefined) {
      hasAnyValues = true;
      internalValueResult.wakeOnLan = this._wakeOnLan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricAuthenticationProfileParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = undefined;
      this._authenticationOrder = undefined;
      this._dot1XToMabFallbackTimeout = undefined;
      this._numberOfHosts = undefined;
      this._siteNameHierarchy = undefined;
      this._wakeOnLan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticateTemplateName = value.authenticateTemplateName;
      this._authenticationOrder = value.authenticationOrder;
      this._dot1XToMabFallbackTimeout = value.dot1XToMabFallbackTimeout;
      this._numberOfHosts = value.numberOfHosts;
      this._siteNameHierarchy = value.siteNameHierarchy;
      this._wakeOnLan = value.wakeOnLan;
    }
  }

  // authenticate_template_name - computed: true, optional: true, required: false
  private _authenticateTemplateName?: string; 
  public get authenticateTemplateName() {
    return this.getStringAttribute('authenticate_template_name');
  }
  public set authenticateTemplateName(value: string) {
    this._authenticateTemplateName = value;
  }
  public resetAuthenticateTemplateName() {
    this._authenticateTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateTemplateNameInput() {
    return this._authenticateTemplateName;
  }

  // authentication_order - computed: true, optional: true, required: false
  private _authenticationOrder?: string; 
  public get authenticationOrder() {
    return this.getStringAttribute('authentication_order');
  }
  public set authenticationOrder(value: string) {
    this._authenticationOrder = value;
  }
  public resetAuthenticationOrder() {
    this._authenticationOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOrderInput() {
    return this._authenticationOrder;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dot1x_to_mab_fallback_timeout - computed: true, optional: true, required: false
  private _dot1XToMabFallbackTimeout?: string; 
  public get dot1XToMabFallbackTimeout() {
    return this.getStringAttribute('dot1x_to_mab_fallback_timeout');
  }
  public set dot1XToMabFallbackTimeout(value: string) {
    this._dot1XToMabFallbackTimeout = value;
  }
  public resetDot1XToMabFallbackTimeout() {
    this._dot1XToMabFallbackTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XToMabFallbackTimeoutInput() {
    return this._dot1XToMabFallbackTimeout;
  }

  // number_of_hosts - computed: true, optional: true, required: false
  private _numberOfHosts?: string; 
  public get numberOfHosts() {
    return this.getStringAttribute('number_of_hosts');
  }
  public set numberOfHosts(value: string) {
    this._numberOfHosts = value;
  }
  public resetNumberOfHosts() {
    this._numberOfHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfHostsInput() {
    return this._numberOfHosts;
  }

  // site_name_hierarchy - computed: true, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // wake_on_lan - computed: true, optional: true, required: false
  private _wakeOnLan?: string; 
  public get wakeOnLan() {
    return this.getStringAttribute('wake_on_lan');
  }
  public set wakeOnLan(value: string) {
    this._wakeOnLan = value;
  }
  public resetWakeOnLan() {
    this._wakeOnLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wakeOnLanInput() {
    return this._wakeOnLan;
  }
}

export class SdaFabricAuthenticationProfileParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : SdaFabricAuthenticationProfileParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): SdaFabricAuthenticationProfileParametersPayloadOutputReference {
    return new SdaFabricAuthenticationProfileParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaFabricAuthenticationProfileParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#payload SdaFabricAuthenticationProfile#payload}
  */
  readonly payload: SdaFabricAuthenticationProfileParametersPayload[] | cdktf.IResolvable;
}

export function sdaFabricAuthenticationProfileParametersToTerraform(struct?: SdaFabricAuthenticationProfileParametersOutputReference | SdaFabricAuthenticationProfileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.listMapper(sdaFabricAuthenticationProfileParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function sdaFabricAuthenticationProfileParametersToHclTerraform(struct?: SdaFabricAuthenticationProfileParametersOutputReference | SdaFabricAuthenticationProfileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.listMapperHcl(sdaFabricAuthenticationProfileParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "SdaFabricAuthenticationProfileParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaFabricAuthenticationProfileParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SdaFabricAuthenticationProfileParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaFabricAuthenticationProfileParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload = new SdaFabricAuthenticationProfileParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: SdaFabricAuthenticationProfileParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile dnacenter_sda_fabric_authentication_profile}
*/
export class SdaFabricAuthenticationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_fabric_authentication_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaFabricAuthenticationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaFabricAuthenticationProfile to import
  * @param importFromId The id of the existing SdaFabricAuthenticationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaFabricAuthenticationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_fabric_authentication_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_fabric_authentication_profile dnacenter_sda_fabric_authentication_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaFabricAuthenticationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SdaFabricAuthenticationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_fabric_authentication_profile',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new SdaFabricAuthenticationProfileItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new SdaFabricAuthenticationProfileParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaFabricAuthenticationProfileParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: sdaFabricAuthenticationProfileParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: sdaFabricAuthenticationProfileParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaFabricAuthenticationProfileParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
