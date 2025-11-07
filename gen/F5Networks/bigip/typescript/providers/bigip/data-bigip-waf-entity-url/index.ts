// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipWafEntityUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#description DataBigipWafEntityUrl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#id DataBigipWafEntityUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Select a method for the URL to create an API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#method DataBigipWafEntityUrl#method}
  */
  readonly method?: string;
  /**
  * Name of the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#name DataBigipWafEntityUrl#name}
  */
  readonly name: string;
  /**
  * If true then any violation associated to the respective URL will not be enforced, and the request will not be considered illegal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#perform_staging DataBigipWafEntityUrl#perform_staging}
  */
  readonly performStaging?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the protocol for the URL is 'http' or 'https'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#protocol DataBigipWafEntityUrl#protocol}
  */
  readonly protocol?: string;
  /**
  * List of Attack Signature Ids which are disabled for this particular URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#signature_overrides_disable DataBigipWafEntityUrl#signature_overrides_disable}
  */
  readonly signatureOverridesDisable?: number[];
  /**
  * Specifies whether the parameter is an 'explicit' or a 'wildcard' attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#type DataBigipWafEntityUrl#type}
  */
  readonly type?: string;
  /**
  * cross_origin_requests_enforcement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#cross_origin_requests_enforcement DataBigipWafEntityUrl#cross_origin_requests_enforcement}
  */
  readonly crossOriginRequestsEnforcement?: DataBigipWafEntityUrlCrossOriginRequestsEnforcement[] | cdktf.IResolvable;
  /**
  * method_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#method_overrides DataBigipWafEntityUrl#method_overrides}
  */
  readonly methodOverrides?: DataBigipWafEntityUrlMethodOverrides[] | cdktf.IResolvable;
}
export interface DataBigipWafEntityUrlCrossOriginRequestsEnforcement {
  /**
  * Specifies whether the subdomains are allowed to receive data from the web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#include_subdomains DataBigipWafEntityUrl#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the origin with which you want to share your data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#origin_name DataBigipWafEntityUrl#origin_name}
  */
  readonly originName: string;
  /**
  * Specifies the port that other web applications are allowed to use to request data from your web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#origin_port DataBigipWafEntityUrl#origin_port}
  */
  readonly originPort: string;
  /**
  * Specifies the protocol that other web applications are allowed to use to request data from your web application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#origin_protocol DataBigipWafEntityUrl#origin_protocol}
  */
  readonly originProtocol: string;
}

export function dataBigipWafEntityUrlCrossOriginRequestsEnforcementToTerraform(struct?: DataBigipWafEntityUrlCrossOriginRequestsEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    origin_name: cdktf.stringToTerraform(struct!.originName),
    origin_port: cdktf.stringToTerraform(struct!.originPort),
    origin_protocol: cdktf.stringToTerraform(struct!.originProtocol),
  }
}


export function dataBigipWafEntityUrlCrossOriginRequestsEnforcementToHclTerraform(struct?: DataBigipWafEntityUrlCrossOriginRequestsEnforcement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_name: {
      value: cdktf.stringToHclTerraform(struct!.originName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_port: {
      value: cdktf.stringToHclTerraform(struct!.originPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_protocol: {
      value: cdktf.stringToHclTerraform(struct!.originProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBigipWafEntityUrlCrossOriginRequestsEnforcementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBigipWafEntityUrlCrossOriginRequestsEnforcement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubdomains = this._includeSubdomains;
    }
    if (this._originName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originName = this._originName;
    }
    if (this._originPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPort = this._originPort;
    }
    if (this._originProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.originProtocol = this._originProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBigipWafEntityUrlCrossOriginRequestsEnforcement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeSubdomains = undefined;
      this._originName = undefined;
      this._originPort = undefined;
      this._originProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeSubdomains = value.includeSubdomains;
      this._originName = value.originName;
      this._originPort = value.originPort;
      this._originProtocol = value.originProtocol;
    }
  }

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: boolean | cdktf.IResolvable; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains');
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains;
  }

  // origin_name - computed: false, optional: false, required: true
  private _originName?: string; 
  public get originName() {
    return this.getStringAttribute('origin_name');
  }
  public set originName(value: string) {
    this._originName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originNameInput() {
    return this._originName;
  }

  // origin_port - computed: false, optional: false, required: true
  private _originPort?: string; 
  public get originPort() {
    return this.getStringAttribute('origin_port');
  }
  public set originPort(value: string) {
    this._originPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originPortInput() {
    return this._originPort;
  }

  // origin_protocol - computed: false, optional: false, required: true
  private _originProtocol?: string; 
  public get originProtocol() {
    return this.getStringAttribute('origin_protocol');
  }
  public set originProtocol(value: string) {
    this._originProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolInput() {
    return this._originProtocol;
  }
}

export class DataBigipWafEntityUrlCrossOriginRequestsEnforcementList extends cdktf.ComplexList {
  public internalValue? : DataBigipWafEntityUrlCrossOriginRequestsEnforcement[] | cdktf.IResolvable

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
  public get(index: number): DataBigipWafEntityUrlCrossOriginRequestsEnforcementOutputReference {
    return new DataBigipWafEntityUrlCrossOriginRequestsEnforcementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBigipWafEntityUrlMethodOverrides {
  /**
  * Specifies that the system allows or disallows a method for this URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#allow DataBigipWafEntityUrl#allow}
  */
  readonly allow: boolean | cdktf.IResolvable;
  /**
  * Specifies an HTTP method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#method DataBigipWafEntityUrl#method}
  */
  readonly method: string;
}

export function dataBigipWafEntityUrlMethodOverridesToTerraform(struct?: DataBigipWafEntityUrlMethodOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function dataBigipWafEntityUrlMethodOverridesToHclTerraform(struct?: DataBigipWafEntityUrlMethodOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBigipWafEntityUrlMethodOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBigipWafEntityUrlMethodOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBigipWafEntityUrlMethodOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._method = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._method = value.method;
    }
  }

  // allow - computed: false, optional: false, required: true
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}

export class DataBigipWafEntityUrlMethodOverridesList extends cdktf.ComplexList {
  public internalValue? : DataBigipWafEntityUrlMethodOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataBigipWafEntityUrlMethodOverridesOutputReference {
    return new DataBigipWafEntityUrlMethodOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url bigip_waf_entity_url}
*/
export class DataBigipWafEntityUrl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_waf_entity_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipWafEntityUrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipWafEntityUrl to import
  * @param importFromId The id of the existing DataBigipWafEntityUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipWafEntityUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_waf_entity_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_url bigip_waf_entity_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipWafEntityUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipWafEntityUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_waf_entity_url',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._method = config.method;
    this._name = config.name;
    this._performStaging = config.performStaging;
    this._protocol = config.protocol;
    this._signatureOverridesDisable = config.signatureOverridesDisable;
    this._type = config.type;
    this._crossOriginRequestsEnforcement.internalValue = config.crossOriginRequestsEnforcement;
    this._methodOverrides.internalValue = config.methodOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // perform_staging - computed: false, optional: true, required: false
  private _performStaging?: boolean | cdktf.IResolvable; 
  public get performStaging() {
    return this.getBooleanAttribute('perform_staging');
  }
  public set performStaging(value: boolean | cdktf.IResolvable) {
    this._performStaging = value;
  }
  public resetPerformStaging() {
    this._performStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performStagingInput() {
    return this._performStaging;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // signature_overrides_disable - computed: false, optional: true, required: false
  private _signatureOverridesDisable?: number[]; 
  public get signatureOverridesDisable() {
    return this.getNumberListAttribute('signature_overrides_disable');
  }
  public set signatureOverridesDisable(value: number[]) {
    this._signatureOverridesDisable = value;
  }
  public resetSignatureOverridesDisable() {
    this._signatureOverridesDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureOverridesDisableInput() {
    return this._signatureOverridesDisable;
  }

  // type - computed: false, optional: true, required: false
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

  // cross_origin_requests_enforcement - computed: false, optional: true, required: false
  private _crossOriginRequestsEnforcement = new DataBigipWafEntityUrlCrossOriginRequestsEnforcementList(this, "cross_origin_requests_enforcement", false);
  public get crossOriginRequestsEnforcement() {
    return this._crossOriginRequestsEnforcement;
  }
  public putCrossOriginRequestsEnforcement(value: DataBigipWafEntityUrlCrossOriginRequestsEnforcement[] | cdktf.IResolvable) {
    this._crossOriginRequestsEnforcement.internalValue = value;
  }
  public resetCrossOriginRequestsEnforcement() {
    this._crossOriginRequestsEnforcement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossOriginRequestsEnforcementInput() {
    return this._crossOriginRequestsEnforcement.internalValue;
  }

  // method_overrides - computed: false, optional: true, required: false
  private _methodOverrides = new DataBigipWafEntityUrlMethodOverridesList(this, "method_overrides", false);
  public get methodOverrides() {
    return this._methodOverrides;
  }
  public putMethodOverrides(value: DataBigipWafEntityUrlMethodOverrides[] | cdktf.IResolvable) {
    this._methodOverrides.internalValue = value;
  }
  public resetMethodOverrides() {
    this._methodOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodOverridesInput() {
    return this._methodOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      perform_staging: cdktf.booleanToTerraform(this._performStaging),
      protocol: cdktf.stringToTerraform(this._protocol),
      signature_overrides_disable: cdktf.listMapper(cdktf.numberToTerraform, false)(this._signatureOverridesDisable),
      type: cdktf.stringToTerraform(this._type),
      cross_origin_requests_enforcement: cdktf.listMapper(dataBigipWafEntityUrlCrossOriginRequestsEnforcementToTerraform, true)(this._crossOriginRequestsEnforcement.internalValue),
      method_overrides: cdktf.listMapper(dataBigipWafEntityUrlMethodOverridesToTerraform, true)(this._methodOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      perform_staging: {
        value: cdktf.booleanToHclTerraform(this._performStaging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_overrides_disable: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._signatureOverridesDisable),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_origin_requests_enforcement: {
        value: cdktf.listMapperHcl(dataBigipWafEntityUrlCrossOriginRequestsEnforcementToHclTerraform, true)(this._crossOriginRequestsEnforcement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBigipWafEntityUrlCrossOriginRequestsEnforcementList",
      },
      method_overrides: {
        value: cdktf.listMapperHcl(dataBigipWafEntityUrlMethodOverridesToHclTerraform, true)(this._methodOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBigipWafEntityUrlMethodOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
