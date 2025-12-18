// https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgWlantemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Where this template should be applied to, can be org_id, site_ids, sitegroup_ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#applies OrgWlantemplate#applies}
  */
  readonly applies?: OrgWlantemplateApplies;
  /**
  * List of Device Profile ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#deviceprofile_ids OrgWlantemplate#deviceprofile_ids}
  */
  readonly deviceprofileIds?: string[];
  /**
  * Where this template should not be applied to (takes precedence)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#exceptions OrgWlantemplate#exceptions}
  */
  readonly exceptions?: OrgWlantemplateExceptions;
  /**
  * Whether to further filter by Device Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#filter_by_deviceprofile OrgWlantemplate#filter_by_deviceprofile}
  */
  readonly filterByDeviceprofile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#name OrgWlantemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#org_id OrgWlantemplate#org_id}
  */
  readonly orgId: string;
}
export interface OrgWlantemplateApplies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#org_id OrgWlantemplate#org_id}
  */
  readonly orgId?: string;
  /**
  * List of site ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#site_ids OrgWlantemplate#site_ids}
  */
  readonly siteIds?: string[];
  /**
  * List of sitegroup ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#sitegroup_ids OrgWlantemplate#sitegroup_ids}
  */
  readonly sitegroupIds?: string[];
}

export function orgWlantemplateAppliesToTerraform(struct?: OrgWlantemplateApplies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_id: cdktf.stringToTerraform(struct!.orgId),
    site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteIds),
    sitegroup_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sitegroupIds),
  }
}


export function orgWlantemplateAppliesToHclTerraform(struct?: OrgWlantemplateApplies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sitegroup_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sitegroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlantemplateAppliesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlantemplateApplies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._siteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteIds = this._siteIds;
    }
    if (this._sitegroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitegroupIds = this._sitegroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlantemplateApplies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgId = undefined;
      this._siteIds = undefined;
      this._sitegroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgId = value.orgId;
      this._siteIds = value.siteIds;
      this._sitegroupIds = value.sitegroupIds;
    }
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // site_ids - computed: true, optional: true, required: false
  private _siteIds?: string[]; 
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  public resetSiteIds() {
    this._siteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // sitegroup_ids - computed: true, optional: true, required: false
  private _sitegroupIds?: string[]; 
  public get sitegroupIds() {
    return this.getListAttribute('sitegroup_ids');
  }
  public set sitegroupIds(value: string[]) {
    this._sitegroupIds = value;
  }
  public resetSitegroupIds() {
    this._sitegroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitegroupIdsInput() {
    return this._sitegroupIds;
  }
}
export interface OrgWlantemplateExceptions {
  /**
  * List of site ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#site_ids OrgWlantemplate#site_ids}
  */
  readonly siteIds?: string[];
  /**
  * List of sitegroup ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#sitegroup_ids OrgWlantemplate#sitegroup_ids}
  */
  readonly sitegroupIds?: string[];
}

export function orgWlantemplateExceptionsToTerraform(struct?: OrgWlantemplateExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteIds),
    sitegroup_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sitegroupIds),
  }
}


export function orgWlantemplateExceptionsToHclTerraform(struct?: OrgWlantemplateExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sitegroup_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sitegroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgWlantemplateExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgWlantemplateExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteIds = this._siteIds;
    }
    if (this._sitegroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitegroupIds = this._sitegroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgWlantemplateExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._siteIds = undefined;
      this._sitegroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._siteIds = value.siteIds;
      this._sitegroupIds = value.sitegroupIds;
    }
  }

  // site_ids - computed: true, optional: true, required: false
  private _siteIds?: string[]; 
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  public resetSiteIds() {
    this._siteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // sitegroup_ids - computed: true, optional: true, required: false
  private _sitegroupIds?: string[]; 
  public get sitegroupIds() {
    return this.getListAttribute('sitegroup_ids');
  }
  public set sitegroupIds(value: string[]) {
    this._sitegroupIds = value;
  }
  public resetSitegroupIds() {
    this._sitegroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitegroupIdsInput() {
    return this._sitegroupIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate mist_org_wlantemplate}
*/
export class OrgWlantemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_wlantemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgWlantemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgWlantemplate to import
  * @param importFromId The id of the existing OrgWlantemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgWlantemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_wlantemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.2/docs/resources/org_wlantemplate mist_org_wlantemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgWlantemplateConfig
  */
  public constructor(scope: Construct, id: string, config: OrgWlantemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_wlantemplate',
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
    this._applies.internalValue = config.applies;
    this._deviceprofileIds = config.deviceprofileIds;
    this._exceptions.internalValue = config.exceptions;
    this._filterByDeviceprofile = config.filterByDeviceprofile;
    this._name = config.name;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applies - computed: true, optional: true, required: false
  private _applies = new OrgWlantemplateAppliesOutputReference(this, "applies");
  public get applies() {
    return this._applies;
  }
  public putApplies(value: OrgWlantemplateApplies) {
    this._applies.internalValue = value;
  }
  public resetApplies() {
    this._applies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesInput() {
    return this._applies.internalValue;
  }

  // deviceprofile_ids - computed: true, optional: true, required: false
  private _deviceprofileIds?: string[]; 
  public get deviceprofileIds() {
    return this.getListAttribute('deviceprofile_ids');
  }
  public set deviceprofileIds(value: string[]) {
    this._deviceprofileIds = value;
  }
  public resetDeviceprofileIds() {
    this._deviceprofileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceprofileIdsInput() {
    return this._deviceprofileIds;
  }

  // exceptions - computed: true, optional: true, required: false
  private _exceptions = new OrgWlantemplateExceptionsOutputReference(this, "exceptions");
  public get exceptions() {
    return this._exceptions;
  }
  public putExceptions(value: OrgWlantemplateExceptions) {
    this._exceptions.internalValue = value;
  }
  public resetExceptions() {
    this._exceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions.internalValue;
  }

  // filter_by_deviceprofile - computed: true, optional: true, required: false
  private _filterByDeviceprofile?: boolean | cdktf.IResolvable; 
  public get filterByDeviceprofile() {
    return this.getBooleanAttribute('filter_by_deviceprofile');
  }
  public set filterByDeviceprofile(value: boolean | cdktf.IResolvable) {
    this._filterByDeviceprofile = value;
  }
  public resetFilterByDeviceprofile() {
    this._filterByDeviceprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByDeviceprofileInput() {
    return this._filterByDeviceprofile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applies: orgWlantemplateAppliesToTerraform(this._applies.internalValue),
      deviceprofile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceprofileIds),
      exceptions: orgWlantemplateExceptionsToTerraform(this._exceptions.internalValue),
      filter_by_deviceprofile: cdktf.booleanToTerraform(this._filterByDeviceprofile),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applies: {
        value: orgWlantemplateAppliesToHclTerraform(this._applies.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlantemplateApplies",
      },
      deviceprofile_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceprofileIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exceptions: {
        value: orgWlantemplateExceptionsToHclTerraform(this._exceptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgWlantemplateExceptions",
      },
      filter_by_deviceprofile: {
        value: cdktf.booleanToHclTerraform(this._filterByDeviceprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
