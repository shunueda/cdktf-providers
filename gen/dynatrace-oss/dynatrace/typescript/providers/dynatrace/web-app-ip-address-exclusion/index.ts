// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppIpAddressExclusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#application_id WebAppIpAddressExclusion#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#id WebAppIpAddressExclusion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * These are the only IP addresses that should be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#ip_address_exclusion_include WebAppIpAddressExclusion#ip_address_exclusion_include}
  */
  readonly ipAddressExclusionInclude: boolean | cdktf.IResolvable;
  /**
  * ip_exclusion_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#ip_exclusion_list WebAppIpAddressExclusion#ip_exclusion_list}
  */
  readonly ipExclusionList?: WebAppIpAddressExclusionIpExclusionListStruct;
}
export interface WebAppIpAddressExclusionIpExclusionListIpExclusion {
  /**
  * Single IP or IP range start address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#ip WebAppIpAddressExclusion#ip}
  */
  readonly ip: string;
  /**
  * IP range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#ip_to WebAppIpAddressExclusion#ip_to}
  */
  readonly ipTo?: string;
}

export function webAppIpAddressExclusionIpExclusionListIpExclusionToTerraform(struct?: WebAppIpAddressExclusionIpExclusionListIpExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_to: cdktf.stringToTerraform(struct!.ipTo),
  }
}


export function webAppIpAddressExclusionIpExclusionListIpExclusionToHclTerraform(struct?: WebAppIpAddressExclusionIpExclusionListIpExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_to: {
      value: cdktf.stringToHclTerraform(struct!.ipTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppIpAddressExclusionIpExclusionListIpExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebAppIpAddressExclusionIpExclusionListIpExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTo = this._ipTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppIpAddressExclusionIpExclusionListIpExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._ipTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._ipTo = value.ipTo;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_to - computed: false, optional: true, required: false
  private _ipTo?: string; 
  public get ipTo() {
    return this.getStringAttribute('ip_to');
  }
  public set ipTo(value: string) {
    this._ipTo = value;
  }
  public resetIpTo() {
    this._ipTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipToInput() {
    return this._ipTo;
  }
}

export class WebAppIpAddressExclusionIpExclusionListIpExclusionList extends cdktf.ComplexList {
  public internalValue? : WebAppIpAddressExclusionIpExclusionListIpExclusion[] | cdktf.IResolvable

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
  public get(index: number): WebAppIpAddressExclusionIpExclusionListIpExclusionOutputReference {
    return new WebAppIpAddressExclusionIpExclusionListIpExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebAppIpAddressExclusionIpExclusionListStruct {
  /**
  * ip_exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#ip_exclusion WebAppIpAddressExclusion#ip_exclusion}
  */
  readonly ipExclusion: WebAppIpAddressExclusionIpExclusionListIpExclusion[] | cdktf.IResolvable;
}

export function webAppIpAddressExclusionIpExclusionListStructToTerraform(struct?: WebAppIpAddressExclusionIpExclusionListStructOutputReference | WebAppIpAddressExclusionIpExclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_exclusion: cdktf.listMapper(webAppIpAddressExclusionIpExclusionListIpExclusionToTerraform, true)(struct!.ipExclusion),
  }
}


export function webAppIpAddressExclusionIpExclusionListStructToHclTerraform(struct?: WebAppIpAddressExclusionIpExclusionListStructOutputReference | WebAppIpAddressExclusionIpExclusionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_exclusion: {
      value: cdktf.listMapperHcl(webAppIpAddressExclusionIpExclusionListIpExclusionToHclTerraform, true)(struct!.ipExclusion),
      isBlock: true,
      type: "list",
      storageClassType: "WebAppIpAddressExclusionIpExclusionListIpExclusionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppIpAddressExclusionIpExclusionListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppIpAddressExclusionIpExclusionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipExclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipExclusion = this._ipExclusion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppIpAddressExclusionIpExclusionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipExclusion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipExclusion.internalValue = value.ipExclusion;
    }
  }

  // ip_exclusion - computed: false, optional: false, required: true
  private _ipExclusion = new WebAppIpAddressExclusionIpExclusionListIpExclusionList(this, "ip_exclusion", false);
  public get ipExclusion() {
    return this._ipExclusion;
  }
  public putIpExclusion(value: WebAppIpAddressExclusionIpExclusionListIpExclusion[] | cdktf.IResolvable) {
    this._ipExclusion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExclusionInput() {
    return this._ipExclusion.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion dynatrace_web_app_ip_address_exclusion}
*/
export class WebAppIpAddressExclusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_ip_address_exclusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppIpAddressExclusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppIpAddressExclusion to import
  * @param importFromId The id of the existing WebAppIpAddressExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppIpAddressExclusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_ip_address_exclusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_ip_address_exclusion dynatrace_web_app_ip_address_exclusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppIpAddressExclusionConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppIpAddressExclusionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_ip_address_exclusion',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._ipAddressExclusionInclude = config.ipAddressExclusionInclude;
    this._ipExclusionList.internalValue = config.ipExclusionList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // ip_address_exclusion_include - computed: false, optional: false, required: true
  private _ipAddressExclusionInclude?: boolean | cdktf.IResolvable; 
  public get ipAddressExclusionInclude() {
    return this.getBooleanAttribute('ip_address_exclusion_include');
  }
  public set ipAddressExclusionInclude(value: boolean | cdktf.IResolvable) {
    this._ipAddressExclusionInclude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressExclusionIncludeInput() {
    return this._ipAddressExclusionInclude;
  }

  // ip_exclusion_list - computed: false, optional: true, required: false
  private _ipExclusionList = new WebAppIpAddressExclusionIpExclusionListStructOutputReference(this, "ip_exclusion_list");
  public get ipExclusionList() {
    return this._ipExclusionList;
  }
  public putIpExclusionList(value: WebAppIpAddressExclusionIpExclusionListStruct) {
    this._ipExclusionList.internalValue = value;
  }
  public resetIpExclusionList() {
    this._ipExclusionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipExclusionListInput() {
    return this._ipExclusionList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      ip_address_exclusion_include: cdktf.booleanToTerraform(this._ipAddressExclusionInclude),
      ip_exclusion_list: webAppIpAddressExclusionIpExclusionListStructToTerraform(this._ipExclusionList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      ip_address_exclusion_include: {
        value: cdktf.booleanToHclTerraform(this._ipAddressExclusionInclude),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_exclusion_list: {
        value: webAppIpAddressExclusionIpExclusionListStructToHclTerraform(this._ipExclusionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppIpAddressExclusionIpExclusionListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
