// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AbpWebsitesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account these websites belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#account_id AbpWebsites#account_id}
  */
  readonly accountId: number;
  /**
  * Whether to publish the changes automatically. Changes don't take take effect until they have been published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#auto_publish AbpWebsites#auto_publish}
  */
  readonly autoPublish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#id AbpWebsites#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * website_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#website_group AbpWebsites#website_group}
  */
  readonly websiteGroup?: AbpWebsitesWebsiteGroup[] | cdktf.IResolvable;
}
export interface AbpWebsitesWebsiteGroupWebsite {
  /**
  * Enables the ABP conditions for this website. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#enable_mitigation AbpWebsites#enable_mitigation}
  */
  readonly enableMitigation?: boolean | cdktf.IResolvable;
  /**
  * Which `incapsula_site` this website refers to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#incapsula_site_id AbpWebsites#incapsula_site_id}
  */
  readonly incapsulaSiteId: number;
}

export function abpWebsitesWebsiteGroupWebsiteToTerraform(struct?: AbpWebsitesWebsiteGroupWebsite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_mitigation: cdktf.booleanToTerraform(struct!.enableMitigation),
    incapsula_site_id: cdktf.numberToTerraform(struct!.incapsulaSiteId),
  }
}


export function abpWebsitesWebsiteGroupWebsiteToHclTerraform(struct?: AbpWebsitesWebsiteGroupWebsite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_mitigation: {
      value: cdktf.booleanToHclTerraform(struct!.enableMitigation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    incapsula_site_id: {
      value: cdktf.numberToHclTerraform(struct!.incapsulaSiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AbpWebsitesWebsiteGroupWebsiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AbpWebsitesWebsiteGroupWebsite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMitigation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMitigation = this._enableMitigation;
    }
    if (this._incapsulaSiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.incapsulaSiteId = this._incapsulaSiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AbpWebsitesWebsiteGroupWebsite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMitigation = undefined;
      this._incapsulaSiteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMitigation = value.enableMitigation;
      this._incapsulaSiteId = value.incapsulaSiteId;
    }
  }

  // enable_mitigation - computed: false, optional: true, required: false
  private _enableMitigation?: boolean | cdktf.IResolvable; 
  public get enableMitigation() {
    return this.getBooleanAttribute('enable_mitigation');
  }
  public set enableMitigation(value: boolean | cdktf.IResolvable) {
    this._enableMitigation = value;
  }
  public resetEnableMitigation() {
    this._enableMitigation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMitigationInput() {
    return this._enableMitigation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incapsula_site_id - computed: false, optional: false, required: true
  private _incapsulaSiteId?: number; 
  public get incapsulaSiteId() {
    return this.getNumberAttribute('incapsula_site_id');
  }
  public set incapsulaSiteId(value: number) {
    this._incapsulaSiteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incapsulaSiteIdInput() {
    return this._incapsulaSiteId;
  }
}

export class AbpWebsitesWebsiteGroupWebsiteList extends cdktf.ComplexList {
  public internalValue? : AbpWebsitesWebsiteGroupWebsite[] | cdktf.IResolvable

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
  public get(index: number): AbpWebsitesWebsiteGroupWebsiteOutputReference {
    return new AbpWebsitesWebsiteGroupWebsiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AbpWebsitesWebsiteGroup {
  /**
  * Name for the website group. Must be unique unless `name_id` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#name AbpWebsites#name}
  */
  readonly name: string;
  /**
  * Unique user-defined identifier used to differentiate website groups whose `name` is identical
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#name_id AbpWebsites#name_id}
  */
  readonly nameId?: string;
  /**
  * website block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#website AbpWebsites#website}
  */
  readonly website?: AbpWebsitesWebsiteGroupWebsite[] | cdktf.IResolvable;
}

export function abpWebsitesWebsiteGroupToTerraform(struct?: AbpWebsitesWebsiteGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_id: cdktf.stringToTerraform(struct!.nameId),
    website: cdktf.listMapper(abpWebsitesWebsiteGroupWebsiteToTerraform, true)(struct!.website),
  }
}


export function abpWebsitesWebsiteGroupToHclTerraform(struct?: AbpWebsitesWebsiteGroup | cdktf.IResolvable): any {
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
    name_id: {
      value: cdktf.stringToHclTerraform(struct!.nameId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website: {
      value: cdktf.listMapperHcl(abpWebsitesWebsiteGroupWebsiteToHclTerraform, true)(struct!.website),
      isBlock: true,
      type: "list",
      storageClassType: "AbpWebsitesWebsiteGroupWebsiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AbpWebsitesWebsiteGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AbpWebsitesWebsiteGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameId = this._nameId;
    }
    if (this._website?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.website = this._website?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AbpWebsitesWebsiteGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameId = undefined;
      this._website.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nameId = value.nameId;
      this._website.internalValue = value.website;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name_id - computed: false, optional: true, required: false
  private _nameId?: string; 
  public get nameId() {
    return this.getStringAttribute('name_id');
  }
  public set nameId(value: string) {
    this._nameId = value;
  }
  public resetNameId() {
    this._nameId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdInput() {
    return this._nameId;
  }

  // website - computed: false, optional: true, required: false
  private _website = new AbpWebsitesWebsiteGroupWebsiteList(this, "website", false);
  public get website() {
    return this._website;
  }
  public putWebsite(value: AbpWebsitesWebsiteGroupWebsite[] | cdktf.IResolvable) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }
}

export class AbpWebsitesWebsiteGroupList extends cdktf.ComplexList {
  public internalValue? : AbpWebsitesWebsiteGroup[] | cdktf.IResolvable

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
  public get(index: number): AbpWebsitesWebsiteGroupOutputReference {
    return new AbpWebsitesWebsiteGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites incapsula_abp_websites}
*/
export class AbpWebsites extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_abp_websites";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AbpWebsites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AbpWebsites to import
  * @param importFromId The id of the existing AbpWebsites that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AbpWebsites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_abp_websites", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/abp_websites incapsula_abp_websites} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AbpWebsitesConfig
  */
  public constructor(scope: Construct, id: string, config: AbpWebsitesConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_abp_websites',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._autoPublish = config.autoPublish;
    this._id = config.id;
    this._websiteGroup.internalValue = config.websiteGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: number; 
  public get accountId() {
    return this.getNumberAttribute('account_id');
  }
  public set accountId(value: number) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // auto_publish - computed: false, optional: true, required: false
  private _autoPublish?: boolean | cdktf.IResolvable; 
  public get autoPublish() {
    return this.getBooleanAttribute('auto_publish');
  }
  public set autoPublish(value: boolean | cdktf.IResolvable) {
    this._autoPublish = value;
  }
  public resetAutoPublish() {
    this._autoPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPublishInput() {
    return this._autoPublish;
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

  // last_publish - computed: true, optional: false, required: false
  public get lastPublish() {
    return this.getStringAttribute('last_publish');
  }

  // website_group - computed: false, optional: true, required: false
  private _websiteGroup = new AbpWebsitesWebsiteGroupList(this, "website_group", false);
  public get websiteGroup() {
    return this._websiteGroup;
  }
  public putWebsiteGroup(value: AbpWebsitesWebsiteGroup[] | cdktf.IResolvable) {
    this._websiteGroup.internalValue = value;
  }
  public resetWebsiteGroup() {
    this._websiteGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteGroupInput() {
    return this._websiteGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.numberToTerraform(this._accountId),
      auto_publish: cdktf.booleanToTerraform(this._autoPublish),
      id: cdktf.stringToTerraform(this._id),
      website_group: cdktf.listMapper(abpWebsitesWebsiteGroupToTerraform, true)(this._websiteGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.numberToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_publish: {
        value: cdktf.booleanToHclTerraform(this._autoPublish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website_group: {
        value: cdktf.listMapperHcl(abpWebsitesWebsiteGroupToHclTerraform, true)(this._websiteGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AbpWebsitesWebsiteGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
